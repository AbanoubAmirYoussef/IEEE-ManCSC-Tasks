let TheoreticalAnswers = `
1- Explain the difference between primitive types and reference types in JavaScript.
Answer:
Primitive types are simple data types like number, string, boolean, null, and undefined.
Reference types are more complex data like object, array, and function.
The main point is:
Reference types store a reference to the value in memory

2- Compare the two methods of creating a new function in JavaScript: Function Declaration and Function Expression. Discuss the differences between them in terms of hoisting and provide examples for each.
Answer:
- Function Declaration (Normal Declaration) is when we define the function like this:
function greet() {
    console.log("Hello");
    }
    // It is hoisted (we can call it before defining it).
    - Function Expression is when we store a function in a variable:
const greet = function() {
    console.log("Hi");
    };
    // It is not hoisted (we can't call it before defining it).
    
3- Research the concept of "Pure Function" and then respond to the following: Under what conditions can a function be classified as a pure function?
Answer: 
A pure function is a function that:
- Depends only on its inputs.
- Does not change anything outside it.
Example: Add 2 numbers
function add(a, b) {
    return a + b;
} // This is Pure Function
    
4- Write down the array methods that you have studied and classify them to destructive and not destructive.
Answer: 
- Destructive Methods (change the original array):
Examples: push, pop, shift, unshift, splice, sort, and reverse
- Non-Destructive Methods (do not change the original array):
Examples: map, filter, reduce, slice, concat, find, and includes
`;

let PracticalAnswer = `https://github.com/AbanoubAmirYoussef/IEEE-simple-inventory-system`;
