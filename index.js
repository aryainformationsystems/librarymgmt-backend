const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");

const dbConfig = require('./config/db.config');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect(dbConfig.url, () => {
    console.log('Connected with the database...');
});

mongoose.Promise = global.Promise;

require('./routes/book.route')(app);

app.listen(8080, () => {
    console.log('Server started successfully');
});
