const issuesController = require('../controllers/issues.controller');

module.exports = (app) => {
    app.get('/issues', issuesController.getIssues);
}