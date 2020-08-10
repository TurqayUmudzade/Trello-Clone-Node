const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();

const port = process.env.PORT || 3000;

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

//?ROUTES



app.get('/', (req, res) => {
    res.render('pages/home')
})
app.get('/login', (req, res) => {
    res.render('pages/login')
})

app.get('/register', (req, res) => {
    res.render('pages/register')
})

app.get('/register', (req, res) => {
    res.render('pages/register')
})

app.post('/register', (req, res) => {
    console.log("registed " + req.body.password);
    //console.log(req.body.email + " " + req.body.password + " " + res.body);
})

app.listen(port, () => {
    console.log(`TODO app Started on port ${port}!`)
})