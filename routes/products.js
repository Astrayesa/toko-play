// product router
const express = require("express")
const router = express.Router();
const VideoModel = require("../models/video")
const ProductModel = require("../models/product")

router.get("/:video_id", (req, res) => {
    // get products from databse

    // param:
    // video_id,

    // response:
    // _id
    // title
    // url
    // price

    VideoModel.findById(req.params.video_id, "products").exec()
        .then((data) => {
            res.status(200);
            res.send(data);
        }).catch((e) => {
            res.status(404);
            res.send({
                status: 404,
                msg: "Produk tidak ditemukan"
            });
        });
});

router.post("/", (req, res) => {
    // save product to database

    // body:
    // product_title
    // product_link
    // price

    // response:
    // status
    // message
    const { video_id } = req.params;

    const { product_title, product_link, price } = req.body;


    const product = new ProductModel({
        title: product_title,
        url: product_link,
        price: price
    })

    VideoModel.updateOne({ _id: video_id }, { $push: { products: product } })
        .then(() => {
            res.status(201);
            res.send({
                "status": 201,
                "msg": "Berhasil menambahkan produk baru",
                "data": product
            })
        }).catch((e) => {
            console.log(e)
            res.status(400);
            res.send({
                "status": 400,
                "msg": "Gagal menambahkan produk"
            })
        });
})

module.exports = router;