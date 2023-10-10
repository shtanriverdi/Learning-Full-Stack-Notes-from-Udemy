const mongoose = require('mongoose');

main().catch(err => console.log("Error happened:", err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/shopApp');
    console.log('Mongoose connection opened ✓');
}

const productSchema = new mongoose.Schema({
    // Long and advenced version, allow us to use required field
    // More common to do
    name: {
        type: String,
        required: true,
        // maxlength: 10
    },
    price: {
        type: Number,
        required: true,
        // Validation error!
        min: [0, 'Price should be positive!']
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: {
        type: [String]
    },
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        // Size can only be one of these:
        enum: ['S', 'M', 'L']
    }
    // isOnSale: Boolean
});

// Create custom instance method on our model instance
// We will have access to this method on every single product
// And when we find a particular product
productSchema.methods.greet = function () {
    console.log("Hellooooo Hii!");
    console.log(`- from ${this.name}`);
}

// Methods to updates someting on my model
productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale;
    return this.save(); // Async 
}

productSchema.methods.addCategory = function (newCategory) {
    this.categories.push(newCategory);
    return this.save();
}

// Adding model static methods to the model itself
productSchema.statics.fireSale = function () {
    // 'this' refers to entire model
    return this.updateMany({}, { onSale: true, price: 0 });
}

const Product = mongoose.model('Product', productSchema);

const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'Bike Helmet' });
    // foundProduct.greet();
    console.log("Before", foundProduct);
    await foundProduct.toggleOnSale();
    await foundProduct.addCategory('Outdoors');
    console.log("After", foundProduct);
}

Product.fireSale()
    .then(res => console.log(res));

// findProduct();

// const bike = new Product({
//     name: 'Cycling Jersey',
//     // price: '599' // This will work too
//     price: 28.50,
//     // color: 'red' // Will be ignored! won't be added
//     categories: ['Cycling'], // will Cast to string
//     size: 'XS'
// });

// const bike = new Product({
//     name: 'Mountain Bike',
//     // price: '599' // This will work too
//     price: 999,
//     // color: 'red' // Will be ignored! won't be added
// });

// const bike = new Product({
//     name: 'Tire Pump',
//     // price: '599' // This will work too
//     price: 19.5,
//     // color: 'red' // Will be ignored! won't be added
//     categories: ['Cycling'] // will Cast to string
// });

// bike.save()
//     .then(data => {
//         console.log("Data saved!", data);
//     })
//     .catch(err => console.log("Error:", err))

// Product.findOneAndUpdate({ name: 'Tire Pump' }, { price: -19.99 }, { new: true, runValidators: true })
//     .then(data => {
//         console.log("Data saved!", data);
//     })
//     .catch(err => console.log("Error:", err))