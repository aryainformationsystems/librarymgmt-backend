const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
bookname: String,
author: String,
price: String,
yearofpublication: Number,
type: String,
genre: String,
stock: String,
publisher: String,
});

module.exports = mongoose.model('book', bookSchema);
