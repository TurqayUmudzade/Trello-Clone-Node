const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config()

// /my-profile
module.exports.get_my_profile = (req, res) => {
    res.render('my-profile');
}

//POST
module.exports.edit_my_profile = (req, res) => {
    const { email, username, fullname } = req.body;
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, process.env.SECRET_JWT, async(err, token) => {
            if (err)
                console.log(err);
            else {
                try {
                    let doc = await User.findByIdAndUpdate(token.id);
                    doc.email = email;
                    doc.username = username;
                    doc.fullname = fullname;
                    await doc.save();
                } catch (err) {
                    let errors = { fullname: '', username: '', email: '' }
                    if (err.message.includes('user validation failed')) {
                        Object.values(err.errors).forEach(({ properties }) => {

                            errors[properties.path] = properties.message;
                        })
                    }
                    res.status(400).json({ errors });
                }
            }
        })
    }

}