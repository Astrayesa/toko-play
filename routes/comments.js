// comments router
const express = require("express")
const router = express.Router();

router.get("/", (req, res) => {
    const video_id = req.query.video_id;
    result = {
        username: "username",
        comment: "comment",
        timestamps: Date.now(),
        video_id: video_id
    };
    res.send(result);
});

router.post("/", (req, res) => {
    const video_id = req.query.video_id;
    console.log(req.params)
    console.log(req.body)
    const { username, comment, timestamps } = req.body
    result = {
        username: username,
        comment: comment,
        timestamps: timestamps,
        video_id: video_id
    };
    // save result to db
    res.status(201);
    res.send({
        status: "success",
        result: result
    });
});

module.exports = router;