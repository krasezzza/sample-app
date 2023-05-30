import IUser from "../interfaces/user.interface";
import BaseRepository from "./base.repository";
import User from "../../models/user";

export default class UserRepository extends BaseRepository {

  constructor() {
    super();
    this.model = User;
  }

  async findById(userId: number) {
    return this.model.findOne({
      where: {
        id: userId
      }
    });
  }

  async findByEmail(userEmail: string) {
    return this.model.findOne({
      where: {
        email: userEmail
      }
    });
  }

  async createOne(userData: IUser) {
    return this.model.create({
      email: userData.email,
      password: userData.password
    });
  }
}
