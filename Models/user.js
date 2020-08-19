const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please Enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please Enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please Enter a Password'],
        minlength: [6, 'Please Enter a password with at least 6 characters']
    },
});


userSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

const User = mongoose.model('user', userSchema);

module.exports = User;