import config from "../../config/config";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: config.database.dialect,
  storage: config.database.storage
});

export default sequelize;
