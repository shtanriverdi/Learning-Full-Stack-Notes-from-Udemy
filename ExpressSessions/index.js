const express = require('express');
const app = express();
const session = require('express-session');

/*
Create a session, the most important part is secret
In production, we want it to be a actual secret key
Everytime in our request object, we will have access to session propery
*/
app.use(session({ secret: 'thisisnotagoodsecret' }));

/*
    If a user opens this page, "connect.sid" will be assined to that user.
    So that we can store little info in it. Browser automatically sends.
    For every browser or user, session will be created
*/
app.get('/viewcount', (req, res) => {
    /* 
        We can add anything we want to "req.session",
        That data in session is stored server side
        and it is associated with individual users or 
        at least individual browsers
    */
    if (req.session.count) {
        req.session.count += 1;
    }
    else {
        req.session.count = 1;
    }
    res.send(`You have viewed this page ${ req.session.count } times`);
})

app.listen(3000, () => {
    console.log('Express server is up and running on port 3000...');
});