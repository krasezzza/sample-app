import { NextFunction, Request, Response } from "express";
import UserService from "../services/user";

const userService = new UserService();

const getList = async (req: Request, res: Response, next: NextFunction) => {
  const list = await userService.fetchAll();

  res.status(200).json(list);
};

const getOne = async (req: Request, res: Response, next: NextFunction) => {
  const user = await userService.fetchOne(
    parseInt(req.params.id)
  );

  res.status(200).json(user);
};

export default {
  getList,
  getOne
};
