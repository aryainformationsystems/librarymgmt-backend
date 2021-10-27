const memberController = require('../controllers/member.controller');

module.exports = (app) => {
    app.get('/member', memberController.getMember);
}