import { Model, DataTypes } from "sequelize";
import sequelize from "../src/utils/dbConn";

class User extends Model {}

User.init({
  name: DataTypes.STRING,
  email: DataTypes.STRING
}, {
  sequelize,
  modelName: 'User'
});

export default User;
