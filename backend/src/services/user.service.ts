import UserRepository from "../repositories/user.repository";
import logger from "../../config/logger";
import User from "../../models/user";

export default class UserService {

  private repository: UserRepository;

  constructor() {
    this.repository = new UserRepository();
  }

  fetchAllUsers() {
    return this.repository.findAll(
    ).then((result: User[]) => {
      return result;
    }).catch((error: any) => {
      logger.error(error.message, error);
      return [];
    });
  }

  fetchUserById(userId: number) {
    return this.repository.findById(
      userId
    ).then((result: User | null) => {
      return result;
    }).catch((error: any) => {
      logger.error(error.message, error);
      return null;
    });
  }
}
