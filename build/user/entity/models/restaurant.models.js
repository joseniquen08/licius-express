"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const restaurant_schemas_1 = require("../schemas/restaurant.schemas");
exports.RestaurantModel = mongoose_1.default.model('Restaurant', restaurant_schemas_1.RestaurantSchema);
