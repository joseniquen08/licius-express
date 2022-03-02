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
exports.createRestaurant = exports.createClient = void 0;
const createClient_services_1 = require("../services/createClient.services");
const createRestaurant_services_1 = require("../services/createRestaurant.services");
const createUser_services_1 = require("../services/createUser.services");
const token_utils_1 = require("../utils/token.utils");
const createClient = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, createUser_services_1.createUserService)(req.body);
        const client = yield (0, createClient_services_1.createClientService)(Object.assign({ user_id: user._id, profile: {
                first_name: req.body.first_name,
                last_name: req.body.last_name
            } }, req.body));
        const token = (0, token_utils_1.createToken)({ id: client._id, });
        res.status(201).json({ success: true, token, data: { user, client } });
    }
    catch (error) {
        next(error);
    }
});
exports.createClient = createClient;
const createRestaurant = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, createUser_services_1.createUserService)(req.body);
        const restaurant = yield (0, createRestaurant_services_1.createRestaurantService)(Object.assign({ user_id: user._id, profile: {
                razon_social: req.body.razon_social,
                ruc: req.body.ruc,
                nombre_comercial: req.body.nombre_comercial,
                description: req.body.description
            } }, req.body));
        const token = (0, token_utils_1.createToken)({ id: restaurant._id, });
        res.status(201).json({ success: true, token, data: { user, restaurant } });
    }
    catch (error) {
        next(error);
    }
});
exports.createRestaurant = createRestaurant;
