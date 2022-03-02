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
exports.getPostService = void 0;
const appLogger_1 = require("../../shared/logger/appLogger");
const post_models_1 = require("../entity/models/post.models");
const getPostService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield post_models_1.PostModel.findById(id).populate('user_id').populate('comments');
    }
    catch (e) {
        appLogger_1.logger.error(e);
    }
});
exports.getPostService = getPostService;
