import { Request, Response, NextFunction } from "express";
import AuthService from "../services/auth.service";
import IUser from "../interfaces/user.interface";
import logger from "../../config/logger";
import bcryptjs from "bcryptjs";

const authService = new AuthService();

const register = async (req: Request, res: Response, next: NextFunction) => {
  let {email, password} = req.body;

  await bcryptjs.hash(password, 12, async (hashError, hashString) => {
    if (hashError) {
      return res.status(500).json({
        message: hashError.message,
        error: hashError
      });
    }

    const newUser: IUser = {
      email: email,
      password: hashString
    }

    await console.log('DEBUG THIS', newUser);

    // await authService.registerUser(newUser);

    return res.status(201).json({
      message: 'User registered'
    });
  });
};

const validate = async (req: Request, res: Response, next: NextFunction) => {
  logger.info('Token validated');

  return res.status(200).json({
    message: 'User authorized'
  });
};

const login = async (req: Request, res: Response, next: NextFunction) => {
  logger.info('User logged in');

  return res.status(200).json({
    message: 'Login successful'
  });
};

export default {
  register,
  validate,
  login
};
