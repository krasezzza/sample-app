import { Request, Response, NextFunction } from "express";
import { verify as jwtVerify } from "jsonwebtoken";
import config from "../../config/config";
import logger from "../../config/logger";

const extractJWT = (req: Request, res: Response, next: NextFunction) => {
  logger.info('Validating token');

  let authToken = req.headers.authorization?.split(' ')[1];

  if (authToken) {
    jwtVerify(
      authToken,
      config.server.token.secret,
      (error, decoded) => {
        if (error) {
          return res.status(404).json({
            message: error.message,
            error
          });
        } else {
          res.locals.jwt = decoded;
          next();
        }
      });
  } else {
    return res.status(401).json({
      message: 'Unauthorized'
    });
  }
};

export default extractJWT;
