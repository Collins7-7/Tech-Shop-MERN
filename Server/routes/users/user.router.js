const express = require("express");
const { httpPostUsers } = require("./user.controller");
const asyncHandler = require("express-async-handler");

const usersRouter = express.Router();

usersRouter.post("/user", asyncHandler(httpPostUsers));

module.exports = {
  usersRouter,
};
