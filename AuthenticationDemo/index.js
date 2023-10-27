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

app.get('/', (req, res) => {
    res.send('Home Page');
})

app.get('/register', (req, res) => {
    res.render('register');
})

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hash = await bcrypt.hash(password, 12);
    const user = new User({
        username,
        hashedPassword: hash
    });
    await user.save();
    req.session.user_id = user._id;
    res.redirect('/');
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.post('/login', async (req, res) => {
    const { username, password }= req.body;
    const user = await User.findOne({ username });
    const isValidPassword = await bcrypt.compare(password, user.hashedPassword);
    if (isValidPassword) {
        // If a user successfully logged in, 
        // We store user's id in the session
        req.session.user_id = user._id;
        res.redirect('/secret');
    } else {
        res.redirect('/login');
    }
})

app.get('/secret', (req, res) => {
    // If there is not a user id in this session
    if (!req.session.user_id) {
        return res.redirect('/login');
    }
    res.send('You cant see mee');
})

app.listen(3000, () => {
    console.log('Express server is running...');
});