var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: String,
    diachi: String
});

var User = mongoose.model('User', userSchema, 'users');

module.exports = User;