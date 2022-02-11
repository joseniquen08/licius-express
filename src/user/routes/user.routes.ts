import { Router } from "express";
import { createUser } from "../controllers/user.controllers";
import { userValidationMiddleware } from "../middlewares/reqValidation.middlewares";

const router: Router = Router();

router.post('/user/create', userValidationMiddleware, createUser);

export default router;