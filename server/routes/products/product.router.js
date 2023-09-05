const express = require("express");
const {
  httpPostProducts,
  httpGetProducts,
  httpGetSingleProduct,
  httpPostReview,
} = require("./product.controller");
const asyncHandler = require("express-async-handler");
const { protect } = require("../../Middleware/AuthMiddleware");

const productsRouter = express.Router();

productsRouter.post("/products", asyncHandler(httpPostProducts));
productsRouter.get("/", asyncHandler(httpGetProducts));
productsRouter.get("/:id", asyncHandler(httpGetSingleProduct));
productsRouter.post("/:id/review", protect, asyncHandler(httpPostReview));

module.exports = {
  productsRouter,
};
