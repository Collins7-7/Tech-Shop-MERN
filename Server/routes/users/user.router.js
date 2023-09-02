const express = require("express");
const { httpPostUsers } = require("./user.controller");

const usersRouter = express.Router();

usersRouter.post("/user", httpPostUsers);

module.exports = {
  usersRouter,
};
