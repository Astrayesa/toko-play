// comments router
const express = require("express")
const router = express.Router();
const CommentModel = require("../models/comment")

router.get("/", (req, res) => {
    const { video_id } = req.body;
    CommentModel.find({ video_id: video_id }).exec()
        .then((data) => {
            res.status(200);
            res.send(data);
        }).catch((e) => {
            res.status(400);
            res.send("failed");
        });
});

router.post("/", (req, res) => {
    // body:
    // username
    // comment
    // video_id

    // response:
    // status
    // saved comment

    const { username, comment, video_id } = req.body

    const comment_model = new CommentModel({
        username: username,
        comment: comment,
        video_id: video_id
    })

    comment_model.save()
        .then((saved_data) => {
            res.status(201);
            res.send({
                "status": "success",
                "msg": "Berhasil menyimpan komentar",
                "data": saved_data
            })
        }).catch((e) => {
            console.log(e)
            res.status(500);
            res.send({
                "status": "failed",
                "msg": "Gagal menyimpan komentar"
            })
        });
});

module.exports = router;