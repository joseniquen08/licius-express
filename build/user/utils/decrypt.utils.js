"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePassword = void 0;
const crypto_js_1 = __importDefault(require("crypto-js"));
// posible async
const decryptHash = (hash) => {
    const bytes = crypto_js_1.default.AES.decrypt(hash, `${process.env.ENCRYPT_SECRET}`);
    return bytes.toString(crypto_js_1.default.enc.Utf8);
};
const validatePassword = (password, encryptedPassword) => password === decryptHash(encryptedPassword) ? true : false;
exports.validatePassword = validatePassword;
