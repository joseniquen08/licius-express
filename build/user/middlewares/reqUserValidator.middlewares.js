"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.userRequestValidator = exports.signInUserSchema = exports.signUpRestaurantSchema = exports.signUpClientSchema = void 0;
const yup = __importStar(require("yup"));
const ApplicationError_1 = require("../../shared/customErrors/ApplicationError");
exports.signUpClientSchema = yup.object({
    body: yup.object({
        first_name: yup.string().required('First name is required'),
        last_name: yup.string().required('Last name is required'),
        email: yup.string().email('Invalid email.').required('Email is required'),
        password: yup.string().min(8, 'Min length is 8').required('Password is required.')
    })
});
exports.signUpRestaurantSchema = yup.object({
    body: yup.object({
        razon_social: yup.string().required('Razon social is required'),
        ruc: yup.number().min(11).positive().integer().required('RUC is required'),
        nombre_comercial: yup.string().required('Nombre comercial is required'),
        description: yup.string().required('Description is required'),
        category_id: yup.number().required('Category id is required'),
        email: yup.string().email('Invalid email.').required('Email is required'),
        password: yup.string().min(8, 'Min length is 8').required('Password is required.')
    })
});
exports.signInUserSchema = yup.object({
    body: yup.object({
        email: yup.string().email('Invalid email.').required('Email is required'),
        password: yup.string().min(8, 'Min length is 8').required('Password is required.')
    })
});
const userRequestValidator = (schema) => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield schema.validate({
            body: req.body
        });
        next();
    }
    catch (error) {
        next(new ApplicationError_1.ApplicationError(403, error, 'validation'));
    }
});
exports.userRequestValidator = userRequestValidator;
