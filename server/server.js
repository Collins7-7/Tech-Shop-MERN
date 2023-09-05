const express = require("express");
const { connectDatabase } = require("./config/mongoDb");
const { usersRouter } = require("./routes/users/user.router");
const { productsRouter } = require("./routes/products/product.router");
const { notFound, errorHandler } = require("./Middleware/Error");
const { orderRouter } = require("./routes/orders/orders.router");
require("dotenv").config();

const app = express();
app.use(express.json());

connectDatabase();

//API
app.use("/api/import", usersRouter);
app.use("/api/users", usersRouter);
app.use("/api/import", productsRouter);
app.use("/api/products", productsRouter);
app.use("/api/orders", orderRouter);
app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

//ERROR HANDLERS

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 1000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
