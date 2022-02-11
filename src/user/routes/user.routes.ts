import { Router } from "express";
import corsConfig from '../../config/cors.config';
import { createUser } from "../controllers/user.controllers";
import { userValidationMiddleware } from "../middlewares/reqValidation.middlewares";
const cors = require('cors');

const router: Router = Router();

// revisar cors
router.post('/user/create', cors(corsConfig),userValidationMiddleware, createUser);

export default router;