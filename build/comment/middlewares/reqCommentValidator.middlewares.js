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
exports.commentRequestValidator = exports.createCommentSchema = void 0;
const yup = __importStar(require("yup"));
const ApplicationError_1 = require("../../shared/customErrors/ApplicationError");
exports.createCommentSchema = yup.object({
    body: yup.object({
        user_id: yup.string().required('user_id is required'),
        post_id: yup.string().required('post_id is required'),
        description: yup.string().required('description is required')
    })
});
const commentRequestValidator = (schema) => (req, _res, next) => __awaiter(void 0, void 0, void 0, function* () {
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
exports.commentRequestValidator = commentRequestValidator;
