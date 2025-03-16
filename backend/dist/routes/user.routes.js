"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_middleware_1 = require("../middleware/auth.middleware");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const pageRouter = (0, express_1.Router)();
pageRouter.post('/signup', user_controller_1.default.addUser);
pageRouter.post('/login', user_controller_1.default.loginUser);
pageRouter.get('/logout', user_controller_1.default.logout);
pageRouter.get('/check-auth', auth_middleware_1.authMiddleware, user_controller_1.default.getUserByUsername);
exports.default = pageRouter;
