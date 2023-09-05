const mongoose = require("mongoose");
const MONGO_URL =
  "mongodb+srv://admin:aA3VKuEXvlVZCc6h@tech-shop.qfwhvch.mongodb.net/techShopDB?retryWrites=true&w=majority";
const connectDatabase = async () => {
  try {
    const connection = await mongoose.connect(MONGO_URL);
    console.log("Mongo connected");
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = {
  connectDatabase,
};
