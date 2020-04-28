const mongoose = require("mongoose");
var passportLocalMongoose = require('passport-local-mongoose');

var User = new mongoose.Schema({
    username: String,
    password: String,
    firstname: String,
    lastname: String,
    faculty: String,
    degree: String,
    role: String, 
});

User.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', User);
