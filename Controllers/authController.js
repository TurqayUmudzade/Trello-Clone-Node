const User = require('../models/User.js')
const jwt = require('jsonwebtoken');
require('dotenv').config()


//FUNCTIONS
const handleErrors = (err) => {
    console.log(err.message, err.code)
    let errors = { email: '', password: '' }

    //Login

    if (err.message === 'Incorrect Email')
        errors.email = 'That email is not registered'
    if (err.message === 'Incorrect Password')
        errors.password = 'Incorrect password'
        //dub mail
    if (err.code === 11000) {
        errors.email = 'that email is already linked to an account';
        return errors;
    }
    //most errors
    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        })
    }

    return errors;
}


const week = 60 * 60 * 24 * 7;
const createJWT = (id) => {
    return jwt.sign({ id }, process.env.SECRET_JWT, {
        expiresIn: week
    })
}

//EXPORTS

module.exports.signup_get = (req, res) => {
    res.render('signup');
}

module.exports.login_get = (req, res) => {
    res.render('login');
}

module.exports.signup_post = async(req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.create({ email, password });
        const token = createJWT(user._id)
        res.cookie('jwt', token, { httpOnly: true, maxAge: week * 1000 });
        res.status(201).json({ user: user._id });
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors });
    }
};

module.exports.login_post = async(req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password);
        res.status(200).json({ user: user._id })
    } catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors })
    }
}