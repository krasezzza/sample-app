import express from "express";
import authRoutes from "./routes/auth.routes"
import usersRoutes from "./routes/users.routes"

// initialize the app
const app = express();

// body-parser
app.use(
  express.urlencoded({
    extended: false
  })
);

// use middlewares
app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);

export default app;
