const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
const mongoose = require("mongoose");

// setup database connection
const connection_string = "mongodb://127.0.0.1:27017/tokoplay";

main().catch((err) => console.log(err));
async function main() {
    await mongoose.connect(connection_string).then(() => { console.log("Database connected") });
}


const indexRouter = require('./routes/index');
const videosRouter = require('./routes/videos');
const productsRouter = require('./routes/products');
const commentsRouter = require('./routes/comments');

const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/', indexRouter);
app.use('/videos', videosRouter);
app.use('/products', productsRouter);
app.use('/comments', commentsRouter);

module.exports = app;
