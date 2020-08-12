const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

let User = require('../Models/user');

//Register Form
router.get('/register', (req, res) => {
    res.render('pages/register', {
        message: ''
    })
})


router.post('/register', [body('email').isEmail().withMessage('Enter a proper email'), body('password').isLength({ min: 5 },).withMessage('must be at least 5 chars long')], (req, res) => {

    const errors = validationResult(req);
    if (errors.isEmpty()) {
        User.create({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }).then(user => res.json(user));
    } else {
        let ErrorMessages = [];
        errors.array().forEach(item => ErrorMessages.push(item))
        console.log(ErrorMessages)
        res.render('pages/register', {
            message: ErrorMessages
        })
    }

});

module.exports = router;