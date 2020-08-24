const express = require('express');
const mongoose = require('mongoose');
const path = require('path');


const app = express();

//VIEW ENGINE
app.set('views', path.join(__dirname, 'Views/pages'));
app.set('view engine', 'ejs')

//Middleware
app.use(express.static('./Public'));
app.use(express.json());



const port = process.env.PORT || 3000;
//Database connection

const dbURI = 'mongodb+srv://yoboiturq:nzGQj6x0d8XQAIvF@cluster0.zyklu.mongodb.net/node-auth';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then((result) => app.listen(3000, () => console.log("Server Up at port " + port)))
    .catch((err) => console.log(err));


//Routes
app.get('/', (req, res) => res.render('home'));

const authRoutes = require('./Routes/authRoutes')
app.use(authRoutes);

// // 404 page
// app.use((req, res) => {
//     res.status(404).render('404', { title: '404' });
// });