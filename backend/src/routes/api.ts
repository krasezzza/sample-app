import { Router } from 'express';
import userController from "../controllers/user";

const router = Router();

router.get('/users', userController.getList);
router.get('/user/:id', userController.getOne);

export default router;
