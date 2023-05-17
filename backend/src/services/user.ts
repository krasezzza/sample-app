import User from "../../models/user.js";
import UserInterface from "../interfaces/user";

export default class UserService {

  constructor() {}

  fetchAll() {
    return User.findAll(
    ).then((result: User[]) => {
      return result;
    }).catch((error: any) => {
      console.log(error);
    });
  }

  fetchOne(userId: number) {
    return User.findOne({
      where: {
        id: userId
      }
    }).then((result: User | null) => {
      return result;
    }).catch((error: any) => {
      console.log(error);
    });
  }

  createOne(data: UserInterface) {
    return User.create({
      name: data.name,
      email: data.email
    }).then(() => {
      console.log('User added successfully.');
    }).catch((error: any) => {
      console.log(error);
    });
  }
}
