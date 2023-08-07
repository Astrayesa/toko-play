// video model using mongoose
const mongoose = require("mongoose");
const ProductModel = require("../models/product");

const videoSchema = new mongoose.Schema({
    title: String,
    url: String,
    thumbnail_url: String,
    products: [ProductModel.schema]
});
const Video = mongoose.model("Video", videoSchema);

module.exports = Video