const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config()

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, process.env.SECRET_JWT, (err, Token) => {
            if (err) {
                console.log(err);
                res.redirect('/login')
            } else
                next();

        })
    } else {
        res.redirect('/login')
    }
};


const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, process.env.SECRET_JWT, async(err, Token) => {
            if (err) {
                console.log(err);
                next();
            } else {
                let user = await User.findById(Token.id);
                res.locals.user = user;
                next();
            }
        })
    } else {
        res.locals.user = null;
        next();
    }
}



module.exports = { requireAuth, checkUser };