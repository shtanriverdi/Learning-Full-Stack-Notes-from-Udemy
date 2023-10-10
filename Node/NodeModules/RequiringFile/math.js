// Requiring A File
const add = (x, y) => x + y;
const PI = 3.14159;
const square = (x) => x * x;

// We are setting on the object, and export all methods here and out
// For files that requires this file to use
// We have to include, if we want to use them in another file

// WAY 1
// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square;

// WAY 1B
exports.add = add;
exports.PI = PI;
exports.square = square;

// WAY 2
// const math = {
//     add: add,
//     PI: PI,
//     square: square
// }
// module.exports = math;

// WAY 3
// module.exports.add = (x, y) => x + y;
// module.exports.PI = 3.14159;
// module.exports.square = (x) => x * x;