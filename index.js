const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./Routes/passport-google.js')




//?VIEW ENGINE

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs')

//?PUBLIC FOLDER

app.use(express.static('./Public'));

// Body Parser Middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(cookieSession({
    name: 'todo-session',
    keys: ['key1', 'key2']
}))
app.use(passport.initialize());
app.use(passport.session());


//?ROUTES

app.get('/', (req, res) => {
        res.render('pages/home')
    })
    //app.use('/', require('./Routes/users.js'))

app.get('/failure', (req, res) => {
    res.send('failed')
})
app.get('/success', (req, res) => {
    res.send('welcome ' + req.user.email)
})

app.get('/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

app.get('/google/callback',
    passport.authenticate('google', {
        successRedirect: '/success',
        failureRedirect: '/failure'
    }));



const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`TODO app Started on port ${port}!`)
})