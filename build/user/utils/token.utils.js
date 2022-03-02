"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToken = exports.createToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const token_config_1 = __importDefault(require("../../config/token.config"));
const createToken = (payload) => {
    return jsonwebtoken_1.default.sign(payload, token_config_1.default.secret, {
        algorithm: 'HS256',
        expiresIn: token_config_1.default.expires
    });
};
exports.createToken = createToken;
const validateToken = (token) => {
    return jsonwebtoken_1.default.verify(token, token_config_1.default.secret);
};
exports.validateToken = validateToken;
