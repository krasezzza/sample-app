const dotenv = require("dotenv");
dotenv.config(); // invoke the env vars

const envStr = process.env.APP_ENV;
const config = {
  "development": {
    "dialect": "sqlite",
    "storage": "database.sqlite"
  },
  "test": {},
  "production": {}
};

module.exports = config[envStr];
