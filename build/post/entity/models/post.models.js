"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostModel = void 0;
const mongoose_1 = require("mongoose");
const post_schemas_1 = require("../schemas/post.schemas");
exports.PostModel = (0, mongoose_1.model)('Post', post_schemas_1.PostSchema);
