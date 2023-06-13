import { Request, Response, NextFunction } from "express";
import { verify as jwtVerify } from "jsonwebtoken";
import config from "../../config/config";

export default (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    return res.status(401).json({
      message: 'Missing authorization token!'
    });
  }

  const authToken = authHeader.split(' ')[1];
  let decodedToken = null;

  try {
    decodedToken = jwtVerify(authToken, config.server.token.secret);
  } catch (error: any) {
    return res.status(401).json({
      message: error.message
    });
  }

  if (!decodedToken) {
    return res.status(401).json({
      message: 'Could not authenticate!'
    });
  }

  res.locals.jwtToken = decodedToken;
  next();
};
