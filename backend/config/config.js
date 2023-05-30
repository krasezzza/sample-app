const dotenv = require("dotenv");
dotenv.config(); // invoke the env vars

const APP_ENV = process.env.APP_ENV || 'development';

const DB_TYPE = process.env.DB_TYPE || 'sqlite';
const DB_NAME = process.env.DB_NAME || 'database.sqlite';

const SERVER_HOST = process.env.SERVER_HOST || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 3001;

const SERVER_TOKEN_EXPIRATION = process.env.SERVER_TOKEN_EXPIRATION || 3600;
const SERVER_TOKEN_ISSUER = process.env.SERVER_TOKEN_ISSUER || 'issuer';
const SERVER_TOKEN_SECRET = process.env.SERVER_TOKEN_SECRET || 'secret';

const SQLITE_SETUP = {
  "development": {
    "dialect": DB_TYPE,
    "storage": DB_NAME
  },
  "test": {},
  "production": {}
};

const config = {
  database: SQLITE_SETUP[APP_ENV],
  server: {
    host: SERVER_HOST,
    port: SERVER_PORT,
    token: {
      expiration: SERVER_TOKEN_EXPIRATION,
      issuer: SERVER_TOKEN_ISSUER,
      secret: SERVER_TOKEN_SECRET
    }
  }
};

module.exports = config;
