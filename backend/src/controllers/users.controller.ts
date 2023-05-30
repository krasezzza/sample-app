import { Request, Response, NextFunction } from "express";
import UserService from "../services/user.service";

const userService: UserService = new UserService();

const getList = async (req: Request, res: Response, next: NextFunction) => {
  const list = await userService.fetchAllUsers();

  res.status(200).json(list);
};

const getOne = async (req: Request, res: Response, next: NextFunction) => {
  const user = await userService.fetchUserById(
    parseInt(req.params.id)
  );

  res.status(200).json(user);
};

export default {
  getList,
  getOne
};
