const express = require("express")
const router = express.Router();
const VideoModel = require("../models/video")

router.get("/", (req, res) => {
    // get video from databse

    // response:
    // _id
    // thumbnail_image_url
    VideoModel.find({}, "title thumbnail_url").exec()
        .then((data) => {
            res.status(200);
            res.send(data);
        }).catch((e) => {
            res.status(404);
            res.send({
                status: 404,
                msg: "Gagal mendapatkan data video"
            });
        });
});

router.get("/:video_id", (req, res) => {
    // get video detail

    // param:
    // video_id

    // response
    // _id
    // title
    // thumbnail_url
    // yt_url
    // product list

    VideoModel.findById(req.params.video_id).exec()
        .then((data) => {
            res.status(200);
            res.send(data);
        }).catch((e) => {
            // log error
            console.error(e);

            res.status(404);
            res.send({
                status: 404,
                msg: "Video tidak ditemukan"
            })
        })
});

function id_extractor(url) {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length == 11) ? match[7] : false;

}

router.post("/", (req, res) => {
    // post to database

    // bocy
    // video_title
    // video_url

    const { video_title, video_url } = req.body;
    const yt_video_id = id_extractor(video_url);
    const thumbnail_image_url = `https://img.youtube.com/vi/${yt_video_id}/0.jpg`;

    // save to database
    const video = new VideoModel({
        title: video_title,
        url: video_url,
        thumbnail_url: thumbnail_image_url
    });

    video.save()
        .then((saved_data) => {
            res.status(201);
            res.send({
                "status": 201,
                "msg": "Berhasil menambahkan video",
                "data": saved_data
            })
        }).catch((e) => {
            console.log(e)
            res.status(500);
            res.send({
                "status": 500,
                "msg": "Gagal menambahkan video"
            })
        });
});

module.exports = router;