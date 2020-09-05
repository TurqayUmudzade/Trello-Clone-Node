const User = require('../models/User');
require('dotenv').config()

// /my-profile
module.exports.get_my_profile = (req, res) => {
    res.render('my-profile', { title: 'My Profile' });
}

//POST
module.exports.edit_my_profile = async(req, res) => {
    const { email, username, fullname } = req.body;
    try {
        let doc = await User.findByIdAndUpdate(req.userID);
        doc.email = email;
        doc.username = username;
        doc.fullname = fullname;
        await doc.save();
    } catch (err) {
        console.log(err);
        let errors = { fullname: '', username: '', email: '' }

        if (err.message.includes('E1100')) {
            errors.email = "This email is linked to another account";
            res.status(400).json({ errors });
        }

        if (err.message.includes('user validation failed')) {
            Object.values(err.errors).forEach(({ properties }) => {
                errors[properties.path] = properties.message;
            })
        }
        res.status(400).json({ errors });
    }
}


//POST image
module.exports.upload_picture = async(req, res) => {
    console.log('\nPOST for profile-photo: ');
    console.log('- req.file: ', req.file);
    try {
        let doc = await User.findByIdAndUpdate(req.userID);
        doc.image = req.file.filename;
        await doc.save();
    } catch (error) {
        console.log(error);
    }
}