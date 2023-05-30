import sequelize from "./utils/dbConn";
import config from "../config/config";
import logger from "../config/logger";
import * as http from "http";
import app from "./app";

const server = http.createServer(app);

sequelize.sync().then(() => {
  server.listen(config.server.port, () => {
    logger.info(`Server listening on port ${ config.server.port }...`);
  });
}).catch((error) => {
  logger.error(error.message, error);
});
