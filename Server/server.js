const express = require("express");
const products = require("./data/Products");
const { connectDatabase } = require("./config/mongoDb");

require("dotenv").config();

connectDatabase();

const app = express();

//Load products from server
app.get("/api/products", (req, res) => {
  res.json(products);
});

//Load a single product

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => {
    return p._id === req.params.id;
  });

  res.json(product);
});

app.get("/", (req, res) => {
  res.send("Api is Running");
});

const PORT = process.env.PORT || 1000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
