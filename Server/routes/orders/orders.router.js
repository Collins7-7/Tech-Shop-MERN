const express = require("express");
const asyncHandler = require("express-async-handler");
const {
  httpPostOrder,
  httpGetOrderById,
  httpOrderPaid,
} = require("./orders.controller");
const { protect } = require("../../Middleware/AuthMiddleware");

const orderRouter = express.Router();

orderRouter.post("/", protect, asyncHandler(httpPostOrder));
orderRouter.get("/:id", protect, asyncHandler(httpGetOrderById));
orderRouter.get("/:id/pay", protect, asyncHandler(httpOrderPaid));

module.exports = { orderRouter };
