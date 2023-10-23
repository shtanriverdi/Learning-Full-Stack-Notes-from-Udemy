/* One to Bajilions,
    When we are working with thousands of objects,
    instead of parent having IDs of its children,
    we keep parent ID on the children.

    One user has many tweets, one tweet belongs to one user
*/

const mongoose = require('mongoose');
const { Schema } = mongoose;

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo');
    console.log('Mongo connection opened ✓');
}

main().catch(err => console.log("Mongo Error happened:", err));

const userSchema = new Schema({
    username: String,
    age: Number
});

const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: { type: Schema.Types.ObjectId, ref: 'User' }
});

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

// const makeTweets = async () => {
//     // const user = new User({
//     //     username: 'genesis',
//     //     age: 26
//     // });

//     const user = await User.findOne({ username: 'genesis' });
//     const tweet2 = new Tweet({
//         text: 'Genesissssss successfullllll',
//         likes: 13217
//     });

//     tweet2.user = user;
//     await tweet2.save();
//     console.log("tweet2 saved!");
// }
// makeTweets();

const findTweet = async () => {
    const t = await Tweet.find({})
    // Populate the user field but only give me the 'name'
    .populate('user', 'username');
    console.log(t);
}

findTweet();