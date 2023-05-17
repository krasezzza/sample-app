import app from "./app";
import dotenv from "dotenv";
import * as http from "http";
import sequelize from "./utils/dbConn";

// invoke the env vars
dotenv.config();

const server = http.createServer(app);
const PORT = process.env.SERVER_PORT || 3001;

sequelize.sync().then(() => {
  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`)
  });
}).catch((err) => {
  console.log(err);
});
