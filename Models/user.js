const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please Enter a Password'],
        minlength: [6, 'Please enter a password with at least 6 characters']
    },
    username: {
        type: String,
        maxlength: [10, 'Username cannot be longer than 10 characters']
    },
    fullname: {
        type: String,
        maxlength: [50, 'Fullname cannot be longer than 50 characters']
    },
});


userSchema.pre('save', async function(next) {
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

//Methods
userSchema.statics.login = async function(email, password) {
    const user = await this.findOne({ email });
    if (user) {
        const auth = await bcrypt.compare(password, user.password)
        if (auth) {
            return user;
        }
        throw Error('Incorrect Password')
    }

    throw Error('Incorrect Email')

}

const User = mongoose.model('user', userSchema);

module.exports = User;