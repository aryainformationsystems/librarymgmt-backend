const mongoose = require('mongoose');

const issuesSchema = mongoose.Schema({
datofissue: String,
book: String,
member: String,
dateofreturn: Date,
dateofactualreturn: Date,
dateofactualreturn: Date,
fine: Number,
});

module.exports = mongoose.model('issues', issuesSchema);
