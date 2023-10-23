/* One to Few Example */

const mongoose = require('mongoose');

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo');
    console.log('Mongo connection opened ✓');
}
main().catch(err => console.log("Mongo Error happened:", err));

// Create a mongodb schema
const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [
        {
            _id: { _id: false },
            street: String,
            city: String,
            state: String,
            country: String
        }
    ]
});

// Create a data model
const User = mongoose.model('User', userSchema);

const addAddress = async(userId) => {
    const user = await User.findById(userId);
    user.addresses.push({
        street: '52 3rd Wilmed St.',
        city: 'New York',
        state: 'NY',
        country: 'USA'
    });
    const res = await user.save();
    console.log("Address Added: ", res);
}

const makeUser = async () => {
    const u = new User({
        first: 'Harry',
        last: 'Potter'
    });
    u.addresses.push({
        street: '123 Sesame St.',
        city: 'New York',
        state: 'NY',
        country: 'USA'
    });
    const res = await u.save();
    console.log("User added:", res);
}

addAddress('65363b1e0b051bbfacd61495');
// makeUser();