import IUser from "../interfaces/user.interface";
import { sign as jwtSign } from "jsonwebtoken";
import config from "../../config/config";
import logger from "../../config/logger";

const signJWT = (user: IUser, callback: (error: Error | null, token: string | null) => void) => {
  let timeSinceEpoch = new Date().getTime();
  let expirationTime = timeSinceEpoch + Number(config.server.token.expiration) * 100000;
  let expirationTimeInSeconds = Math.floor(expirationTime / 1000);

  logger.info(`Attempting to sign token for ${ user.email }`);

  try {
    jwtSign(
      {
        user: user.email
      },
      config.server.token.secret,
      {
        issuer: config.server.token.issuer,
        algorithm: 'HS256',
        expiresIn: expirationTimeInSeconds
      }, (error, token) => {
        if (error) {
          callback(error, null);
        } else if (token) {
          callback(null, token);
        }
      });
  } catch (error: any) {
    logger.error(error.message, error);
    callback(error, null);
  }
};

export default signJWT;
