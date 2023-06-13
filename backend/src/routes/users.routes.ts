import UsersController from "../controllers/users.controller";
import isAuthorized from "../middleware/jwt.middleware";
import { Router } from "express";

const router = Router();

router.get('/all', isAuthorized, UsersController.getAll);
router.get('/one/:id', isAuthorized, UsersController.getOne);

export default router;
