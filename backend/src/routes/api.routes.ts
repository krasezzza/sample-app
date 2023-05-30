import UsersController from "../controllers/users.controller";
import AuthController from "../controllers/auth.controller";
import { Router } from "express";

const router = Router();

router.post('/register', AuthController.register);
router.get('/validate', AuthController.validate);
router.post('/login', AuthController.login);

router.get('/users', UsersController.getList);
router.get('/user/:id', UsersController.getOne);

export default router;
