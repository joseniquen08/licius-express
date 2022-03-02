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
exports.getCommentsAllService = void 0;
const appLogger_1 = require("../../shared/logger/appLogger");
const comment_models_1 = require("../entity/models/comment.models");
const getCommentsAllService = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comments = yield comment_models_1.CommentModel.find({});
        return comments;
    }
    catch (err) {
        appLogger_1.logger.error(err);
        throw err;
    }
});
exports.getCommentsAllService = getCommentsAllService;
