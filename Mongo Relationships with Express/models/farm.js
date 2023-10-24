const mongoose = require('mongoose');
const Product = require('./product');
const { Schema } = mongoose;

const farmScheme = new Schema({
    name: {
        type: String,
        required: [true, 'Farm must have a name']
    },
    city: {
        type: String
    },
    email: {
        type: String,
        require: [true, 'Email required']
    },
    // Each farm has many products
    // We store the ids of those products
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
});

/*
Although MongoDB middleware are similar to Express middleware,
They don't have anything to do with each other.

Creating the middleware, this is for remove all the associated
products of a farm after a farm is deleted.

We used "findByIdAndDelete" so according to Mongoose Docs this will
trigger "findOneAndDelete" middleware that's why we will use that here.
*/ 

// This is running before we run the query of "findByIdAndDelete"
// We don't have access the "data"
// farmScheme.pre('findOneAndDelete', async function (data) {
//     console.log("PRE Middleware");
//     console.log(data);
// });

// This is running after we run the query of "findByIdAndDelete"
// We have access the "data" after the farm is deleted
farmScheme.post('findOneAndDelete', async function (farmDeleted) {
    // Remove all the associated products: products: [ 12231, 12214, 123321... ] 
    if (farmDeleted.products.length) {
        // Delete all products whether their id is in farm.products
        const res = await Product.deleteMany({ _id: { $in: farmDeleted.products } });
        // console.log("Result: ", res);
    }
});


// Create Farm Data Model
const Farm = mongoose.model('Farm', farmScheme);

module.exports = Farm;