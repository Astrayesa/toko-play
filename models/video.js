// video model using mongoose
const mongoose = require("mongoose");
const connection_string = "mongodb://127.0.0.1:27017/tokoplay";
const ProductModel = require("../models/product");

main().catch((err) => console.log(err));
async function main() {
    await mongoose.connect(connection_string);
}

const videoSchema = new mongoose.Schema({
    title: String,
    url: String,
    thumbnail_url: String,
    products: [ProductModel.schema]
});
const Video = mongoose.model("Video", videoSchema);

module.exports = Video