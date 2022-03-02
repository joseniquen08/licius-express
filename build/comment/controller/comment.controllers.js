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
exports.deleteComment = exports.editComment = exports.createComment = exports.getCommentById = exports.getComments = void 0;
const appLogger_1 = require("../../shared/logger/appLogger");
const createComment_services_1 = require("../services/createComment.services");
const deleteComment_services_1 = require("../services/deleteComment.services");
const editComment_services_1 = require("../services/editComment.services");
const getComment_services_1 = require("../services/getComment.services");
const getCommentsAll_services_1 = require("../services/getCommentsAll.services");
const getComments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comments = yield (0, getCommentsAll_services_1.getCommentsAllService)();
        res.status(200).json(comments);
    }
    catch (err) {
        appLogger_1.logger.error(err);
    }
});
exports.getComments = getComments;
const getCommentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comment = yield (0, getComment_services_1.getCommentService)(req.params.comment_id);
        res.status(200).json({ comment });
    }
    catch (error) {
        appLogger_1.logger.error(error);
    }
});
exports.getCommentById = getCommentById;
const createComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comment = yield (0, createComment_services_1.createCommentService)(req.body);
        res.status(201).json({ data: comment });
    }
    catch (err) {
        appLogger_1.logger.error(err);
    }
});
exports.createComment = createComment;
const editComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updateComment = yield (0, editComment_services_1.editCommentService)(req.params.comment_id, req.body);
        res.status(200).json({ data: updateComment });
    }
    catch (err) {
        appLogger_1.logger.error(err);
    }
});
exports.editComment = editComment;
const deleteComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, deleteComment_services_1.deleteCommentService)(req.params.comment_id);
        res.status(204);
    }
    catch (err) {
        appLogger_1.logger.error(err);
    }
});
exports.deleteComment = deleteComment;
