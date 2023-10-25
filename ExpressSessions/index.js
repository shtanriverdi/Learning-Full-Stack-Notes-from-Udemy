const express = require('express');
const app = express();
const session = require('express-session');

/*
Create a session, the most important part is secret
In production, we want it to be a actual secret key
Everytime in our request object, we will have access to session propery
*/
const sessionOptions = { secret: 'thisisnotagoodsecret', resave: false, saveUninitialized: false };
app.use(session(sessionOptions));

/*
    If a user opens this page, "connect.sid" will be assined to that user.
    So that we can store little info in it. Browser automatically sends.
    For every browser or user, session will be created.

    Cooikes are used as a transfert tool to transfer the session id

    Cookies can me modified by the client, that's why they cannot be trusted
    by the server side.
*/
app.get('/viewcount', (req, res) => {
    /* 
        We can add anything we want to "req.session",
        That data in session is stored server side
        and it is associated with individual users or 
        individual browsers

        Currently, the default server-side session store
        is using "MemoryStore" which is in Memory and for development
        and debugging purposes also may lead memory leaks!,
        we won't do that for Production!

        For Production, we will use a session store like "REDIS",
        So this will be stored in a local memory not in actual persistent store like mongo

        Having a cookie that is sent to user's browser, 
        in that cookie does not contain any of these information
        in this session! like "req.session.count"!

        A session can store a whole lot more information but cookie cant.

        The only information cookie sends to User is "connect.sid" which
        is the session id itself that help connects and associated the
        server side with the user's browser, it is like a bridge.

        On the express side, that express-session package takes that cookie
        If it is there, and it's going to make sure it is still valid
        And tries to find the information that corresponds to that session id
        If it does, that's what we have access to "req.session"
    */
    if (req.session.count) {
        req.session.count += 1;
    }
    // First time we hit, it doesn't exist
    else {
        req.session.count = 1;
    }
    res.send(`You have viewed this page ${req.session.count} times`);
})

app.get('/register', (req, res) => {
    const { username = 'Anonymous' } = req.query;
    req.session.username = username;
    res.redirect('/greet');
})

app.get('/greet', (req, res) => {
    const { username } = req.session;
    res.send(`Welcome back ${username}`);
})

app.listen(3000, () => {
    console.log('Express server is up and running on port 3000...');
});