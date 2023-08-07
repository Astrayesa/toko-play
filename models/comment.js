// Comment model using mongoose
const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
    {
        username: String,
        comment: String,
        video_id: { type: mongoose.Schema.Types.ObjectId, ref: "Video" }
    },
    {
        timestamps: true
    }
);
const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment