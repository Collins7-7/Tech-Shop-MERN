const express = require("express");
const {
  httpPostProducts,
  httpGetProducts,
  httpGetSingleProduct,
} = require("./product.controller");
const asyncHandler = require("express-async-handler");

const productsRouter = express.Router();

productsRouter.post("/products", asyncHandler(httpPostProducts));
productsRouter.get("/", asyncHandler(httpGetProducts));
productsRouter.get("/:id", asyncHandler(httpGetSingleProduct));

module.exports = {
  productsRouter,
};
