const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    score: Number
});

const User = mongoose.model('user', UserSchema);

module.exports = User;


