const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.listen(port, () => {
    console.log('Express App is listening on port: ', port, '...');
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/dog', (req, res) => {
    res.send('Woof!');
});