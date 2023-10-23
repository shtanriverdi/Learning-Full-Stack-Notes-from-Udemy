/* One to Many Example
    Two Collections are connecting
*/

const mongoose = require('mongoose');
const { Schema } = mongoose;

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo');
    console.log('Mongo connection opened ✓');
}

main().catch(err => console.log("Mongo Error happened:", err));

const productSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Spring', 'Summer', 'Fall', 'Winter']
    }
});

const farmSchema = new Schema({
    name: String,
    city: String,
    products: [
        // This indicates here we have one to Many relationship
        { type: Schema.Types.ObjectId, ref: 'Product' }
    ]
});

const Product = mongoose.model('Product', productSchema);
const Farm = mongoose.model('Farm', farmSchema);

// Product.insertMany([
//     { name: 'Goddess Melon', price: 4.99, season: 'Summer' },
//     { name: 'Sugar Baby Watermelon', price: 2.99, season: 'Summer' },
//     { name: 'Asparagus', price: 3.99, season: 'Spring' }
// ]);

// const makeFarm = async () => {
//     const farm = new Farm({ name: 'Fully Belly Farms', city: 'Guinda CA' });
//     const melon = await Product.findOne({ name: 'Goddess Melon' });
//     farm.products.push(melon);
//     await farm.save();
//     console.log("Farm: ", farm);
// }

// makeFarm();

// const addProduct = async () => {
//     const farm = await Farm.findOne({ name: 'Fully Belly Farms' });
//     const watermelon = await Product.findOne({ name: 'Sugar Baby Watermelon' });
//     farm.products.push(watermelon);
//     await farm.save();
//     console.log(farm);
// }

// addProduct();

Farm.findOne({ name: 'Fully Belly Farms' })
    // Will replace the ids with the original objects and will return them
    .populate('products') // Populate the products array
    .then((farm) => {
        console.log("Farm: ", farm);
    })