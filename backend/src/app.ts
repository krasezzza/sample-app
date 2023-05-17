import express from "express";
import apiRoutes from "./routes/api"

// initialize the app
const app = express();

// body-parser
app.use(
  express.urlencoded({
    extended: false
  })
);

// use middlewares
app.use('/api', apiRoutes);

export default app;
