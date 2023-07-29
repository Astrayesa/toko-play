// video model using mongoose
const mongoose = require("mongoose");
const connection_string = "mongodb://127.0.0.1:27017/tokoplay";

main().catch((err) => console.log(err));
async function main() {
    await mongoose.connect(connection_string);
}

const videoSchema = new mongoose.Schema({
    title: String,
    url: String,
    thumbnail_url: String
});
const Video = mongoose.model("Video", videoSchema);

function get_video_list() {
    mongoose.connect(connection_string, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            return Video.find()
                .then((data) => {
                    console.log("get from database");
                    console.log(data);
                    return data;
                })
                .catch(err => {
                    console.log(err);
                })
        })
        .then(() => mongoose.disconnect())
}

// export { get_video_list, save_video }
module.exports = Video