import UserRepository from "../repositories/user.repository";
import IUser from "../interfaces/user.interface";
import { sign as jwtSign } from "jsonwebtoken";
import logger from "../../config/logger";
import config from "../../config/config";
import User from "../../models/user";
import bcryptjs from "bcryptjs";

export default class AuthService {

  private repository: UserRepository;

  constructor() {
    this.repository = new UserRepository();
  }

  checkUser(userEmail: string) {
    return this.repository.findByEmail(
      userEmail
    ).then((result: User | null) => {

      return result?.dataValues;
    }).catch((error: any) => {
      logger.error(error.message, error);

      return null;
    });
  }

  registerUser(data: IUser) {
    return this.repository.createOne(
      data
    ).then((result: any) => {

      return result.dataValues;
    }).catch((error: any) => {
      logger.error(error.message, error);

      return null;
    });
  }

  checkPassword(password: string, passwordHash: string) {
    return bcryptjs.compare(
      password, passwordHash
    ).then((result: boolean) => {

      return result;
    }).catch((error: any) => {
      logger.error(error.message, error);

      return null;
    });
  }

  encryptPassword(password: string) {
    return bcryptjs.hash(
      password, 12
    ).then((hash: string) => {

      return hash;
    }).catch((error: any) => {
      logger.error(error.message, error);

      return null;
    });
  }

  signToken(email: string) {
    let token = null;

    try {
      token = jwtSign(
        { user: email },
        config.server.token.secret,
        { expiresIn: config.server.token.expiration }
      );
    } catch (error: any) {
      logger.error(error.message, error);
    }

    return token;
  }
}
