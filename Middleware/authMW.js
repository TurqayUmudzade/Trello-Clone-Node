const jwt = require('jsonwebtoken');
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

module.exports = { requireAuth };