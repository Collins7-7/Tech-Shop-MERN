const express = require("express");
const { connectDatabase } = require("./config/mongoDb");
const { usersRouter } = require("./routes/users/user.router");
const { productsRouter } = require("./routes/products/product.router");
const { notFound, errorHandler } = require("./Middleware/Error");

require("dotenv").config();
connectDatabase();
const app = express();

//API
app.use("/api/import", usersRouter);
app.use("/api/import", productsRouter);
app.use("/api/products", productsRouter);

//ERROR HANDLERS

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 1000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
