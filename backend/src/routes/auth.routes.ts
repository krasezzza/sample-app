import AuthController from "../controllers/auth.controller";
import { Router } from "express";

const router = Router();

router.post('/signup', AuthController.register);
router.post('/signin', AuthController.login);

export default router;
