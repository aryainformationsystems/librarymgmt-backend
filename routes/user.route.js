const userController = require('../controllers/user.controller');

module.exports = (app) => {
    app.get('/user', userController.getUser);
}