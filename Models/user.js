const mongoose = require('mongoose');
const validator = require('validator');




const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        max: 100
    },
    username: {
        type: String,
        required: true,
        max: 100
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        validator(value) {

        }
    }
});
const User = module.exports = mongoose.model('User', UserSchema)