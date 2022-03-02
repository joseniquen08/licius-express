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
exports.deletePost = exports.editPost = exports.createPost = exports.getPostById = exports.getPosts = void 0;
const appLogger_1 = require("../../shared/logger/appLogger");
const createPost_services_1 = require("../services/createPost.services");
const deletePost_services_1 = require("../services/deletePost.services");
const editPost_services_1 = require("../services/editPost.services");
const getPost_services_1 = require("../services/getPost.services");
const getPostsAll_services_1 = require("../services/getPostsAll.services");
const getPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield (0, getPostsAll_services_1.getPostsAllService)();
        res.status(200).json(posts);
    }
    catch (error) {
        appLogger_1.logger.error(error);
    }
});
exports.getPosts = getPosts;
const getPostById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield (0, getPost_services_1.getPostService)(req.params.post_id);
        res.status(200).json({ post });
    }
    catch (error) {
        appLogger_1.logger.error(error);
    }
});
exports.getPostById = getPostById;
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield (0, createPost_services_1.createPostService)(req.body);
        res.status(201).json({ data: post });
    }
    catch (error) {
        appLogger_1.logger.error(error);
    }
});
exports.createPost = createPost;
const editPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatePost = yield (0, editPost_services_1.editPostService)(req.params.post_id, req.body);
        res.status(200).json({ data: updatePost });
    }
    catch (error) {
        appLogger_1.logger.error(error);
    }
});
exports.editPost = editPost;
const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, deletePost_services_1.deletePostService)(req.params.post_id);
        res.status(204).json({ success: true });
    }
    catch (error) {
        appLogger_1.logger.error(error);
    }
});
exports.deletePost = deletePost;
