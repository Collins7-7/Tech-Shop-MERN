const express = require("express");
const asyncHandler = require("express-async-handler");
const {
  httpPostOrder,
  httpGetOrderById,
  httpOrderPaid,
  httpUserOrders,
} = require("./orders.controller");
const { protect } = require("../../Middleware/AuthMiddleware");

const orderRouter = express.Router();

orderRouter.post("/", protect, asyncHandler(httpPostOrder));
orderRouter.get("/:id", protect, asyncHandler(httpGetOrderById));
orderRouter.get("/:id/pay", protect, asyncHandler(httpOrderPaid));
orderRouter.get("/", protect, asyncHandler(httpUserOrders));

module.exports = { orderRouter };
