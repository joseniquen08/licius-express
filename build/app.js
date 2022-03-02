"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const comment_routes_1 = __importDefault(require("./comment/routes/comment.routes"));
const post_routes_1 = __importDefault(require("./post/routes/post.routes"));
const user_routes_1 = __importDefault(require("./user/routes/user.routes"));
const cors = require('cors');
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(cors());
app.use(user_routes_1.default);
app.use(post_routes_1.default);
app.use(comment_routes_1.default);
app.use(function (err, req, res, next) {
    res.status(err.status ? err.status : 500).send({ message: err.message, type: err.type });
});
exports.default = app;
