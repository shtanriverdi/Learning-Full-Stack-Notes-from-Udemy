// Isolate this for development purposes
// No web app involed, no node, no express
const mongoose = require('mongoose');
const Product = require('./models/product');

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/farmStand');
    console.log('Mongo connection opened ✓');
}

main().catch(err => console.log("Mongo Error happened:", err));

// const p = new Product({
//     name: 'Ruby Grapefruit',
//     price: 1.99,
//     category: 'fruit'
// });

// p.save()
//     .then(p => console.log(p))
//     .catch(e => console.log(e))

const seedProducts = [
    {
        name: 'I Fairy Eggplant',
        price: 1.00,
        category: 'vegetable'
    },
    {
        name: 'Organic Goddess Melon',
        price: 4.99,
        category: 'fruit'
    },
    {
        name: 'Organic Mini Seedless Watermelon',
        price: 3.99,
        category: 'fruit'
    },
    {
        name: 'Organic Celery',
        price: 3.99,
        category: 'vegetable'
    },
    {
        name: 'Chocolate Whole Milk',
        price: 2.69,
        category: 'dairy'
    }
];

Product.insertMany(seedProducts)
    .then(res => console.log(res))
    .catch(e => console.log(e))