const express = require('express');
const app = express();
const morgan = require('morgan');
const AppError = require('./AppError');
const port = 3000;

app.use(morgan('common'));


app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
});

app.use('/dogs', (req, res, next) => {
    console.log("I love dogs puppies");
    next();
});

const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    console.log(req.query, password);
    if (password === 'melo') {
        next();
    }
    throw new AppError('Password Required', 401);
    // res.send('You need a password');
    // throw new Error('Password Required');
}

// app.use((req, res, next) => {
//     console.log('MY First Middleware!');
//     return next();
//     console.log('This line will be executed afterwards after First Middleware');
// });

// app.use((req, res, next) => {
//     console.log('MY Second Middleware!');
//     return next();
// });

// app.use((req, res, next) => {
//     console.log('MY Third Middleware!');
//     return next();
// });

app.listen(port, () => {
    console.log('Express App is listening on port: ', port, '...');
});

app.get('/', (req, res) => {
    console.log(`Request Date: ${req.requestTime}`);
    res.send('HOME PAGE');
})

app.get('/error', (req, res) => {
    chicken.fly();
})

app.get('/dogs', (req, res) => {
    console.log(`Request Date: ${req.requestTime}`);
    res.send('DOGS');
})

app.use('/secret', verifyPassword, (req, res, next) => {
    res.send('My Secret is: I am going to be successful');
});

app.get('/admin', (req, res) => {
    throw new AppError('You are not an admin!', 403);
})

app.use((req, res) => {
    res.status(404).send('NOT FOUND!');
})

// Once error happens, we will come into 
// this error handling middleware
// app.use((err, req, res, next) => {
//     console.log("*********************************");
//     console.log("**********ERROR**********");
//     console.log("*********************************");
//     console.log("Err:", err);
//     next(err);
//     // res.status(500).send("Oh Boy We Got An Error!");
// })

app.use((err, req, res, next) => {
    const { status = 500, message = 'Smoething went wrong' } = err;
    res.status(status).send(message);
})