const express = require("express");
const {
  httpPostUsers,
  httpUserLogin,
  httpUserProfile,
} = require("./user.controller");
const asyncHandler = require("express-async-handler");

const { protect } = require("../../Middleware/AuthMiddleware");

const usersRouter = express.Router();

usersRouter.post("/user", asyncHandler(httpPostUsers));
usersRouter.post("/login", asyncHandler(httpUserLogin));
usersRouter.get("/profile", protect, asyncHandler(httpUserProfile));

module.exports = {
  usersRouter,
};
