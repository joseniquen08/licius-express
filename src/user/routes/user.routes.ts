import { Router } from "express";
import { loginUser } from "../controllers/userSignIn.controllers";
import { createClient, createRestaurant } from "../controllers/userSignUp.controllers";
import { signInUserSchema, signUpClientSchema, signUpRestaurantSchema, userRequestValidator } from "../middlewares/reqUserValidator.middlewares";

const router: Router = Router();

// revisar cors
router.post('/user/client/signup', userRequestValidator(signUpClientSchema), createClient);
router.post('/user/restaurant/signup', userRequestValidator(signUpRestaurantSchema), createRestaurant);
router.post('/user/signin', userRequestValidator(signInUserSchema), loginUser);


export default router;