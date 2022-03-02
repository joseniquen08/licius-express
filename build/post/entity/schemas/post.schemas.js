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
exports.PostSchema = void 0;
const mongoose_1 = require("mongoose");
const comment_models_1 = require("../../../comment/entity/models/comment.models");
exports.PostSchema = new mongoose_1.Schema({
    user_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    attachment_urls: {
        type: [String]
    },
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    },
});
exports.PostSchema.virtual('comments', {
    ref: 'Comment',
    localField: '_id',
    foreignField: 'post_id'
});
exports.PostSchema.pre('deleteOne', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const post = this.getFilter();
        yield comment_models_1.CommentModel.deleteMany({ post_id: post._id });
        next();
    });
});
exports.PostSchema.set('toJSON', { virtuals: true });
exports.PostSchema.set('toObject', { virtuals: true });
