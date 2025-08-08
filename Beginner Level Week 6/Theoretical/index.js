// Practical
// Q5

// CommonJS example:
// math.js
module.exports = {
  add: (a, b) => a + b,
};

// main.js
const math = require("./math");
console.log(math.add(2, 3));

// ESM example:
// math.mjs
export const add = (a, b) => a + b;

// main.mjs
import { add } from './math.mjs';
console.log(add(2, 3));
