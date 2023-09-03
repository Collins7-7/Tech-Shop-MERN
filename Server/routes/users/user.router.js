const express = require("express");
const {
  httpPostUsers,
  httpUserLogin,
  httpUserProfile,
  httpRegisterUser,
  httpUpadateProfile,
} = require("./user.controller");
const asyncHandler = require("express-async-handler");

const { protect } = require("../../Middleware/AuthMiddleware");

const usersRouter = express.Router();

usersRouter.post("/user", asyncHandler(httpPostUsers));
usersRouter.post("/login", asyncHandler(httpUserLogin));
usersRouter.get("/profile", protect, asyncHandler(httpUserProfile));
usersRouter.post("/", asyncHandler(httpRegisterUser));
usersRouter.put("/profile", protect, asyncHandler(httpUpadateProfile));

module.exports = {
  usersRouter,
};
