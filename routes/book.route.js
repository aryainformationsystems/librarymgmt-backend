const bookController = require('../controllers/book.controller');

module.exports = (app) => {
    app.get('/book', bookController.getBooks);
}
