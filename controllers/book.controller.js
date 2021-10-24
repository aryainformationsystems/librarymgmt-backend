const bookService = require('../services/book.service');
const apiUtil = require('../util/api.util');

exports.getBooks = (req, res) => {
    bookService.getBooks().then(result => {
        apiUtil.sendResponse(result, res);
    }).catch(err => {
        console.log(err);
        apiUtil.handleError(err, res);
    });
}