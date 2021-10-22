const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    bookName: String,
    author: String,
    price: Number,
    yearOfPublication: Number,
    type: String,
    genre: String,
    stock: Number,
    publisher: String
});

module.exports = mongoose.model('book', bookSchema);
