const express = require('express');
const path = require('path');
const app = express();
const User = require('./models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');

mongoose.connect('mongodb://127.0.0.1:27017/authDemo')
    .then(() => {
        console.log("Mongo Connection Open!");
    })
    .catch((err) => {
        console.log("Mongo Connection Error!", err);
    })

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// POST Body parser middleware
app.use(express.urlencoded({ urlencoded: true, extended: true }));
// connect.sid will be automaticallt sent to the client/user
app.use(session({ secret: 'notagoodsecret' }));

const requireLogin = (req, res, next) => {
    if (!req.session.user_id) {
        return res.redirect('/login');
    }
    next();
}

app.get('/', (req, res) => {
    res.send('Home Page');
})

app.get('/register', (req, res) => {
    res.render('register');
})

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const user = new User({ username, hashedPassword: password });
    await user.save();
    req.session.user_id = user._id;
    res.redirect('/');
})

app.get('/login', (req, res) => {
    // If user already logged in, redirect them
    if (req.session.user_id) {
        return res.redirect('/secret');
    }
    res.render('login');
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const foundUser = await User.findAndValidateUser(username, password);
    if (foundUser) {
        // If a user successfully logged in, 
        // We store user's id in the session
        req.session.user_id = foundUser._id;
        res.redirect('/secret');
    } else {
        res.redirect('/login');
    }
})

app.post('/logout', (req, res) => {
    // req.session.user_id = null;
    console.log("Before Session Destroyed: ", req.sessionStore.sessions);
    req.session.destroy(); // gets rid of everything
    console.log("After Session Destroyed: ", req.sessionStore.sessions);
    res.redirect('/login');
})

app.get('/secret', requireLogin, (req, res) => {
    // // To see all Session Info
    // // console.log(req.sessionStore.sessions);
    // // If there is not a user id in this session
    // if (!req.session.user_id) {
    //     return res.redirect('/login');
    // }
    res.render('secret');
})

app.get('/topsecret', requireLogin, (req, res) => {
    res.render('secret');
})

app.listen(3000, () => {
    console.log('Express server is running...');
});