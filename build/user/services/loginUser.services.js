"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserService = void 0;
const ApplicationError_1 = require("../../shared/customErrors/ApplicationError");
const decrypt_utils_1 = require("../utils/decrypt.utils");
const token_utils_1 = require("../utils/token.utils");
const getUserByEmail_services_1 = require("./getUserByEmail.services");
const loginUserService = (userRequest) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, getUserByEmail_services_1.getUserByEmail)(userRequest.email);
        if (user) {
            const auth = (0, decrypt_utils_1.validatePassword)(userRequest.password, user.password);
            if (auth) {
                return (0, token_utils_1.createToken)({ id: user._id });
            }
            else {
                throw new ApplicationError_1.ApplicationError(401, 'user email or password is incorrect');
            }
        }
        else {
            throw new ApplicationError_1.ApplicationError(401, "user email doesn't exists ");
        }
    }
    catch (error) {
        throw new Error(error.message);
    }
});
exports.loginUserService = loginUserService;
