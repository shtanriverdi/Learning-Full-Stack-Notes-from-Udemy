const express = require('express');
const router = express.Router();

// Every route in here will use this middleware
// Just like app.use same idea.
// This will only apply to these routes here in this file.
router.use((req, res, next) => {
    if (req.query.isAdmin) {
        next();
    }
    res.send('SORRY NOT AN ADMIN');
});

router.get('/topsecret', (req, res) => {
    res.send('This is top secret');
});

router.get('/deleteeverything', (req, res) => {
    res.send('OK Deleted it All!');
});

module.exports = router;