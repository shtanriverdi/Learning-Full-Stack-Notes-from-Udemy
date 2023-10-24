const mongoose = require('mongoose');
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
farmScheme.pre('findOneAndDelete', async function (data) {
    console.log("PRE Middleware");
    console.log(data);
});

farmScheme.post('findOneAndDelete', async function (data) {
    console.log("POST Middleware");
    console.log(data);
});


// Create Farm Data Model
const Farm = mongoose.model('Farm', farmScheme);

module.exports = Farm;