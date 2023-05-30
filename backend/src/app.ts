import apiRoutes from "./routes/api.routes"
import express from "express";

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
