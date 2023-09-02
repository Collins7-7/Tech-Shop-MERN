const express = require("express");
const { httpPostUsers, httpUserLogin } = require("./user.controller");
const asyncHandler = require("express-async-handler");

const usersRouter = express.Router();

usersRouter.post("/user", asyncHandler(httpPostUsers));
usersRouter.post("/login", asyncHandler(httpUserLogin));

module.exports = {
  usersRouter,
};
