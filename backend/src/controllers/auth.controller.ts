import { Request, Response, NextFunction } from "express";
import AuthService from "../services/auth.service";
import IUser from "../interfaces/user.interface";

const authService = new AuthService();

const register = async (req: Request, res: Response, next: NextFunction) => {
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;

  if (password !== confirmPassword) {
    return res.status(403).json({
      message: 'Password confirmation mismatch!'
    });
  }

  const existingUser = await authService.checkUser(email);

  if (existingUser) {
    return res.status(409).json({
      message: 'User already exists!'
    });
  }

  const encryptedPassword = await authService.encryptPassword(password);

  if (!encryptedPassword) {
    return res.status(422).json({
      message: 'User password was not encrypted properly!'
    });
  }

  const newUser: IUser = {
    email: email,
    password: encryptedPassword
  }

  const registeredUser = await authService.registerUser(newUser);

  if (!registeredUser) {
    return res.status(500).json({
      message: 'Could not register a new user!'
    });
  }

  return res.status(201).json({
    message: 'User registered successfully.'
  });
};

const login = async (req: Request, res: Response, next: NextFunction) => {
  const email = req.body.email;
  const password = req.body.password;

  const existingUser = await authService.checkUser(email);

  if (!existingUser) {
    return res.status(404).json({
      message: 'User not found!'
    });
  }

  const isPasswordCorrect = await authService.checkPassword(
    password,
    existingUser.password
  );

  if (!isPasswordCorrect) {
    return res.status(401).json({
      message: 'Incorrect password!'
    });
  }

  const authToken = authService.signToken(existingUser.email);

  if (!authToken) {
    return res.status(401).json({
      message: 'Could not sign authentication token!'
    });
  }

  return res.status(200).json({
    message: 'Login successful.',
    token: authToken
  });
};

export default {
  register,
  login
};
