// ROUTING EXAMPLE
const express = require('express');
const router = express.Router();

// We don't need to write '/shelters' prefix for every route here
// We already get that prefix part from the 'index.js' page
// So we can just continue writing our routes for the rest of the URL
// '/shelters/....'
//           ^____^ 

router.get('/', (req, res) => {
    res.send('All Shelters');
});

router.post('/', (req, res) => {
    res.send('Creating Shelter');
});

router.get('/:id', (req, res) => {
    res.send('Viewing on Shelter');
});

router.get('/:id/edit', (req, res) => {
    res.send('Editing on Shelter');
});

// Export the Router
module.exports = router;