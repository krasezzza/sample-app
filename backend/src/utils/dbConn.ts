import dbConfig from "../../config/database";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: dbConfig.dialect,
  storage: dbConfig.storage
});

export default sequelize;
