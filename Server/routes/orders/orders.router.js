const express = require("express");
const asyncHandler = require("express-async-handler");
const { httpPostOrder } = require("./orders.controller");
const { protect } = require("../../Middleware/AuthMiddleware");

const orderRouter = express.Router();

orderRouter.post("/", protect, asyncHandler(httpPostOrder));

module.exports = { orderRouter };
