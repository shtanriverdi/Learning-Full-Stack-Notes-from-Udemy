// Flashes allow you to have one time messages
// And they will go away/dissappear forever

// Like: Welcome Back! Thanks for joining...
// You are signed in, You are logged out...
// Successfully created, logging you out...

const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('connect-flash');

const sessionOptions = { secret: 'thisisnotagoodsecret', resave: false, saveUninitialized: false };
app.use(session(sessionOptions));
app.use(flash());

const Farm = require('./models/farm');

mongoose.connect('mongodb://127.0.0.1:27017/flashDemo')
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!");
    })
    .catch(err => {
        console.log("NO MONGO CONNECTION ERROR!!!!");
        console.log(err);
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

// FARM ROUTES

/*
This Middleware will do is;
Add on to the response object in such a way that
 In every single template, in every view, 
 we will have access to "messages" 
 thanks to "req.locals"
*/
app.use((req, res, next) => {
    /* We can add whatevert we want to res.locals */
    res.locals.messages = req.flash('success');
    next(); // To make sure we keep moving down
    // Now we don't need to pass "messages = req.flash('success')"
    // To every single view we go
})


app.get('/farms', async (req, res) => {
    const farms = await Farm.find({});
    // BEFORE "res.locals.messages" use the below code
    // To access flash message, we use the key we created
    // const messages = req.flash('success');
    // res.render('farms/index', { farms, messages })
    res.render('farms/index', { farms })
})
app.get('/farms/new', (req, res) => {
    res.render('farms/new')
})
app.get('/farms/:id', async (req, res) => {
    const farm = await Farm.findById(req.params.id).populate('products');
    res.render('farms/show', { farm })
})

app.post('/farms', async (req, res) => {
    const farm = new Farm(req.body);
    await farm.save();
    // Creating temporary flash message with name and value
    // This will add this info to the session
    req.flash('success', 'Successfully made a new farm!');
    res.redirect('/farms')
})

app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!")
})