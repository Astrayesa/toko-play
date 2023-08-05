// Product model using mongoose
const mongoose = require("mongoose");
const connection_string = "mongodb://127.0.0.1:27017/tokoplay";

main().catch((err) => console.log(err));
async function main() {
    await mongoose.connect(connection_string);
}

const productSchema = new mongoose.Schema({
    title: String,
    url: String,
    price: Number
});
const Product = mongoose.model("Product", productSchema);

module.exports = Product