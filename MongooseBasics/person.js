const mongoose = require('mongoose');

main().catch(err => console.log("Error happened:", err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/shopApp');
    console.log('Mongoose connection opened ✓');
}

const personSchema = new mongoose.Schema({
    first: String,
    last: String
});

// Creating middlewares
personSchema.pre('save', async function () {
    this.first = 'YO';
    this.last = 'MAMA';
    console.log('About to save');
});

personSchema.post('save', async function () {
    console.log('Just saved');
});


// Adds a custom propert to model
personSchema.virtual('fullName').get(function () {
    return `${this.first} ${this.last}`;
});

personSchema.virtual('fullName').set(function (newFullName) {
    const parts = newFullName.split(' ');
    this.first = parts[0];
    this.last = parts[1];
});

// Create a model
const Person = mongoose.model('Person', personSchema);
