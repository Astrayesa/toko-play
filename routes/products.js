// product rotuer
const express = require("express")
const router = express.Router();

router.get("/", (req, res) =>{
    // get product from databse

    // query:
    // video_id,

    // response:
    // product_id
    // product_link
    // product_title
    // price
    const video_id = req.query.video_id;

    result = {
        product_id: 12,
        product_link: "/",
        title: "name product",
        price: 129000,
    };
    res.send(result);
});

module.exports = router;