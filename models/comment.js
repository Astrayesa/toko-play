// Comment model using mongoose
const mongoose = require("mongoose");
const connection_string = "mongodb://127.0.0.1:27017/tokoplay";

main().catch((err) => console.log(err));
async function main() {
    await mongoose.connect(connection_string);
}

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