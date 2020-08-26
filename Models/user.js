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