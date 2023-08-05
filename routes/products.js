// product rotuer
const express = require("express")
const router = express.Router();
const VideoModel = require("../models/video")
const ProductModel = require("../models/product")

router.get("/", (req, res) => {
    // get product from databse

    // query:
    // video_id,

    // response:
    // product_id
    // product_link
    // product_title
    // price
    const { video_id } = req.body;
    console.log(video_id);

    VideoModel.findById(video_id, "products").exec()
        .then((data) => {
            res.status(200);
            res.send(data);
        }).catch((e) => {
            res.status(400);
            res.send("failed");
        });
});

router.post("/", (req, res) => {
    // save product to database

    // query:
    // product_title
    // product_link
    // price

    // response:
    // status
    // message

    const { product_title, product_link, price, video_id } = req.body;


    const product = new ProductModel({
        title: product_title,
        url: product_link,
        price: price
    })
    if (!product) {
        console.log("error: failed create model");
    }
    VideoModel.updateOne({ _id: video_id }, { $push: { products: product } })
        .then((saved_data) => {
            res.status(201);
            res.send({
                "status": "success",
                "msg": "berhasil menyimpan produk baru",
                "data": product
            })
        }).catch((e) => {
            console.log(e)
            res.status(500);
            res.send({
                "status": "failed",
                "msg": "gagal menyimpan produk baru"
            })
        });
})

module.exports = router;