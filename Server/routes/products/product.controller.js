const productsDatabase = require("../../models/products.model");
const products = require("../../data/Products");

//POST PRODUCTS/ IMPORT PRODUCTS
async function httpPostProducts(req, res) {
  await productsDatabase.deleteMany({});
  const importProducts = await productsDatabase.insertMany(products);
  res.send({ importProducts });
}

// GET ALL PRODUCTS
async function httpGetProducts(req, res) {
  const products = await productsDatabase.find({});
  res.json(products);
}

// GET SINGLE PRODUCT
async function httpGetSingleProduct(req, res) {
  const product = await productsDatabase.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
}

module.exports = {
  httpPostProducts,
  httpGetProducts,
  httpGetSingleProduct,
};
