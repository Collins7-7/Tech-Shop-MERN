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
  const pageSize = 3;
  const page = Number(req.query.pageNumber) || 1;
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};
  const count = await productsDatabase.countDocuments({ ...keyword });
  const products = await productsDatabase
    .find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))
    .sort({ _id: -1 });
  res.json({ products, page, pages: Math.ceil(count / pageSize) });
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
//PRODUCT REVIEW
async function httpPostReview(req, res) {
  const { rating, comment } = req.body;
  const product = await productsDatabase.findById(req.params.id);

  if (product) {
    const alreadyReviewed = product.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    );
    if (alreadyReviewed) {
      res.status(400);
      throw new Error("Product already reviewed");
    }
    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    };

    product.reviews.push(review);
    product.numReviews = product.reviews.length;
    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length;

    await product.save();
    res.status(201).json({ message: "Review Added" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
}

module.exports = {
  httpPostProducts,
  httpGetProducts,
  httpGetSingleProduct,
  httpPostReview,
};
