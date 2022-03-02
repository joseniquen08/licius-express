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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const post_models_1 = require("../../../post/entity/models/post.models");
const Schema = mongoose_1.default.Schema;
exports.UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: Number,
        required: true
    },
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    },
});
exports.UserSchema.virtual('posts', {
    ref: 'Post',
    localField: '_id',
    foreignField: 'user_id'
});
//middlewares
exports.UserSchema.pre('deleteOne', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = this.getFilter();
        yield post_models_1.PostModel.deleteMany({ user_id: user.id });
        next();
    });
});
exports.UserSchema.set('toJSON', { virtuals: true });
exports.UserSchema.set('toObject', { virtuals: true });
