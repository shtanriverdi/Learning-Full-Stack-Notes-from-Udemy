const express = require('express');
const app = express();
const port = 3000;

// Import the Route
const shelterRoutes = require('./routes/shelters');

// Requests to '/shelters/*' will be sent to our router "shelterRoutes"
// So '/shelters' is the prefix of all of the paths that we've predefined
// In 'shelterRoutes' router.
app.use('/shelters', shelterRoutes);

app.listen(port, () => {
    console.log('✓ Express Server is up and listening on port: ', port, '...');
});