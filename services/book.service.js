const bookModel = require('../models/book');

exports.getBooks = () => {
    return bookModel.find({});
}