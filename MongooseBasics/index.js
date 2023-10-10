const mongoose = require('mongoose');

main().catch(err => console.log("Error happened:", err));

async function main() {
    // Creates collection names "moviesApp" if it doesn't exist
    await mongoose.connect('mongodb://127.0.0.1:27017/moviesApp');
    console.log('Mongoose connection opened ✓');
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// Blueprint of the data model we will use
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

// Name of our model should be singular and firt letter capitalize
// Mongoose will create "Movies" for us
const Movie = mongoose.model('Movie', movieSchema);
// We need to call save for single insertion
// const amadeus = new Movie({
//     title: 'Amadeus',
//     year: 1986,
//     score: 9.5,
//     rating: 'R'
// });

// No need to call save
// Movie.insertMany([
//     { title: 'Amadeus', year: 1986, score: 9.5, rating: 'R' },
//     { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
//     { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
//     { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
//     { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
//     { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' }
// ])
//     .then(data => {
//         console.log("Insertion is successful!");
//         console.log(data);
//     })
//     .catch(err => console.log(err))
// Movie.find({ _id: '6524b3ec16a0c28150f98463' }).then(data => console.log(data))
// Movie.findById("6524b3ec16a0c28150f98463").then(data => console.log(data))