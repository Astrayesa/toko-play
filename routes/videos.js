const express = require("express")
const router = express.Router();

router.get("/", (req, res) =>{
    // get from databse

    // response:
    // video_id
    // thumbnail_image_url

    result = {
        video_id: 12,
        thumbnail_url: "/"
    };
    res.send(result);
});

module.exports = router;