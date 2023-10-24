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

// Create Farm Data Model
const Farm = mongoose.model('Farm', farmScheme);

module.exports = Farm;