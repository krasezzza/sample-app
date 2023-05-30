import UserRepository from "../repositories/user.repository";
import IUser from "../interfaces/user.interface";
import logger from "../../config/logger";

export default class AuthService {

  private repository: UserRepository;

  constructor() {
    this.repository = new UserRepository();
  }

  registerUser(data: IUser) {
    return this.repository.createOne(
      data
    ).then(() => {
      logger.info(`User with email ${ data.email } created successfully`);
      return data;
    }).catch((error: any) => {
      logger.error(error.message, error);
      return null;
    });
  }
}
