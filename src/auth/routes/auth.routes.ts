import { Router } from "express";
import { refreshToken } from '../controllers/refreshToken.controllers';
import { loginUser } from "../controllers/userSignIn.controllers";
import { createClient, createRestaurant } from "../controllers/userSignUp.controllers";
import { refreshTokenRequestValidator, refreshTokenSchema } from '../middlewares/reqRefreshToken.middlewares';
import { signInUserSchema, signUpClientSchema, signUpRestaurantSchema, userRequestValidator } from "../middlewares/reqUserValidator.middlewares";

const router: Router = Router();

router.post('/user/client/signup', userRequestValidator(signUpClientSchema), createClient);
router.post('/user/restaurant/signup', userRequestValidator(signUpRestaurantSchema), createRestaurant);
router.post('/user/signin', userRequestValidator(signInUserSchema), loginUser);
router.post('/refreshtoken', refreshTokenRequestValidator(refreshTokenSchema), refreshToken);

export default router;