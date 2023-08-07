// Product model using mongoose
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: String,
    url: String,
    price: Number
});
const Product = mongoose.model("Product", productSchema);

module.exports = Product