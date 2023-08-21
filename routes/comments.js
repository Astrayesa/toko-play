// comments router
const express = require("express")
const router = express.Router();
const CommentModel = require("../models/comment")

router.get("/:video_id", (req, res) => {
    // get comments from databse

    // param:
    // video_id,

    // response:
    // _id
    // username
    // comment

    const { video_id } = req.params;
    CommentModel.find({ video_id: video_id }).exec()
        .then((data) => {
            res.status(200);
            res.send(data);
        }).catch((e) => {
            res.status(400);
            res.send({
                status: 404,
                msg: "Gagal mendapatkan data komentar"
            });
        });
});

router.post("/:video_id", (req, res) => {
    // query:
    // video_id

    // body:
    // username
    // comment

    // response:
    // status
    // saved comment

    const { video_id } = req.params;

    const { username, comment } = req.body

    const comment_model = new CommentModel({
        username: username,
        comment: comment,
        video_id: video_id
    })

    comment_model.save()
        .then((saved_data) => {
            res.status(201);
            res.send({
                "status": 201,
                "msg": "Berhasil menyimpan komentar",
                "data": saved_data
            })
        }).catch((e) => {
            console.log(e)
            res.status(400);
            res.send({
                "status": 400,
                "msg": "Gagal menyimpan komentar"
            })
        });
});

module.exports = router;