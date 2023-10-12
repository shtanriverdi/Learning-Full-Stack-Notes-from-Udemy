const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const mongoose = require('mongoose');
const Product = require('./models/product');
const methodOverride = require('method-override');

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/farmStand');
    console.log('Mongo connection opened ✓');
}

main().catch(err => console.log("Mongo Error happened:", err));

app.listen(port, () => {
    console.log('Express App is listening on port: ', port, '...');
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/*
    Middlewares are functions or methods in expressJS 
    for carrying out various operations on requests made to the server.
    A middleware comes to the rescue at this stage. 
    The middleware acts like a general reciever for every request.
    Now expressJS has some already made middlewares which help developer in carrying out some tedious task. 
    Like converting request body to JSON and so many others.
    That's why we use the following middleware
    
    Examples of these builtin ExpressJS middlewares are:
    express.json() is a built express middleware that converts
    request body to JSON.

    express.urlencoded() just like express.json() converts
    request body to JSON, it also carries out some other functionalities
    like: converting form-data to JSON etc.

    We use form so we need to enable this middleware here.
*/
app.use(express.urlencoded({ extended: true }));
/*  if your client sends data to the server as JSON, 
    you should use express.json() to parse and access that data. 

    If your client sends data using HTML forms or URL-encoded format, 
    you should use express.urlencoded({ extended: true }) 
    to parse and access that data. 
    Choose the appropriate middleware based on the data format you expect to receive from the client. 
*/
app.use(methodOverride('_method'));
// Since Form cannot do PUT request, we use method override here
// to convert/pretent default form method POST

const categories = ['fruit', 'vegetable', 'dairy', 'fungi'];

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect(`/products`);
});

app.put('/products/:id', async (req, res) => {
    console.log(req.body, req.params);
    const { id } = req.params;
    const editedProduct = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(id, editedProduct, { runValidators: true, new: true });
    res.redirect(`/products/${updatedProduct._id}`);
});

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product, categories });
});

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`);
});

app.get('/products/new', (req, res) => {
    res.render('products/new', { categories });
});

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/show', { product });
});

app.get('/products', async (req, res) => {
    const { category } = req.query;
    let products;
    if (category) {
        products = await Product.find({ category });
    } else {
        products = await Product.find({});
    }
    res.render('products/index', { products, category });
});