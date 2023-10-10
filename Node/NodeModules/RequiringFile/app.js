// Requiring A File

// const math = require('./math');
// console.log(math.PI);
// console.log(math.add(5, 2));

// Requires index.js automatically!
const cats = require('./shelter');
console.log(cats);

// We can destructure the math objects
const { PI, add, square } = require('./math');
console.log(square(9));
console.log(PI);
console.log(add(5, 2));