"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userSignIn_controllers_1 = require("../controllers/userSignIn.controllers");
const userSignUp_controllers_1 = require("../controllers/userSignUp.controllers");
const reqUserValidator_middlewares_1 = require("../middlewares/reqUserValidator.middlewares");
const router = (0, express_1.Router)();
// revisar cors
router.post('/user/client/signup', (0, reqUserValidator_middlewares_1.userRequestValidator)(reqUserValidator_middlewares_1.signUpClientSchema), userSignUp_controllers_1.createClient);
router.post('/user/restaurant/signup', (0, reqUserValidator_middlewares_1.userRequestValidator)(reqUserValidator_middlewares_1.signUpRestaurantSchema), userSignUp_controllers_1.createRestaurant);
router.post('/user/signin', (0, reqUserValidator_middlewares_1.userRequestValidator)(reqUserValidator_middlewares_1.signInUserSchema), userSignIn_controllers_1.loginUser);
exports.default = router;
