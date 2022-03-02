"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentModel = void 0;
const mongoose_1 = require("mongoose");
const comment_schemas_1 = require("../schema/comment.schemas");
exports.CommentModel = (0, mongoose_1.model)('Comment', comment_schemas_1.CommentSchema);
