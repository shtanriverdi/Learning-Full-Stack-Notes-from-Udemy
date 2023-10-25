// How To Use Cookies

/*
    We don't use cookies to store information!
    We use them to add some statefullness between requests
    Places we use cookies like: Sessions, SignIn, TrackingData
*/

const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

// We need to pass a "secret" here for signing the cookies
app.use(cookieParser('thisismysecret'));

app.listen(3000, () => {
    console.log('Express is running...');
});

/* Signing a cookie is not about encyripting or hiding the information
    But is about sealing the cookie we sent to client so that we can
    on the backend side verify whether the cookie is corrupted or not,
    So this tell us the cookie is same/original cookie or not
*/
app.get('/getsignedcookie', (req, res) => {
    // Send a signed cookie
    res.cookie('fruit', 'grape', { signed: true });
    res.send('OK SIGNED YOUR COOKIE');
})

// Verifying a signed cookie
// {"fruit":false} means somebody screwed with our cookie for sure
app.get('/verifyfruit', (req, res) => {
    console.log("req.signedCookies: ", req.signedCookies);
    console.log("req.cookies: ", req.cookies);
    res.send(req.signedCookies);
})

app.get('/greet', (req, res) => {
    // You can rename the variables by usin ':'
    // And can give them a default value by '= ...'
    const { name: CookieUsername = 'no-name' } = req.cookies;
    res.send(`Hey There! ${CookieUsername}`);
});

// This is how to send a Cookie
app.get('/setname', (req, res) => {
    // Creating a cookie, "name: 'melo genesis'"
    // This is part of the response now. We still need to do a response. 
    res.cookie('name', 'GENESISSS');
    res.cookie('animal', 'Eagle');
    // A cookie will be stored in the user's browser.
    // If you send another value with the same name, it will update
    res.send('OKAY SENT YOU A COOKIE');
});