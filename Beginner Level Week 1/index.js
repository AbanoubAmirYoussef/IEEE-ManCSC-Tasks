document.write(`<h2 style="color: red;">Q2: Hamed is simply trying to sort an array of numbers but unfortunately this sort method isn't working as expected. Can you tell Hamed the reason for this behavior and how to implement it in a right way?</h2>`);
document.write(`<h2 style="color: blue;">A: arr.sort((a, b) => a - b) This a solution by function but thats is not in include in a week content and the problem is sort without arguments make it order it as english rules 0 1 2 3 A B C D like that </h2>`);
document.write(`<h2 style="color: red;">Q3: Answer few MCQ questions in the submission form </h2>`)
document.write(`<h2 style="color: blue;">A: OK! </h2>`)
document.write(`<h1>Practical:</h1>`)
console.log("%cPractical Q1:", "color: red; font-size: 16px; font-weight: bold;")
document.write(`<h2 style="color: red;">Q1: Write a JavaScript program that converts temperature from Celsius to Fahrenheit.</h2>`)
document.write(`<h2 style="color: blue;">A: Please open console for result and the code for steps</h2>`)

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

console.log(`0 -> ${celsiusToFahrenheit(0)}`); // 32
console.log(`100 -> ${celsiusToFahrenheit(100)}`); // 212
  
document.write(`<h2 style="color: red;">Q2: Write a JavaScript program that takes an array and updates it in place. Each Element in the array is a string or a number. If it's a number, you should multiply it by 3. If it's a string, you should make the first letter uppercase and the rest lowercase.</h2>`)
document.write(`<h2 style="color: blue;">A: Please open console for result and the code for steps</h2>`)
console.log("%cPractical Q2:", "color: red; font-size: 16px; font-weight: bold;")

let arr = [19, "dreams", "PlayGround", 2, "xD", "i"];
// [57, "Dreams", "Playground", 6, "Xd", "I"]

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
        arr[i] *= 3;
    } else if (typeof arr[i] === "string") {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
    }
}
console.log(arr); 

document.write(`<h2 style="color: red;">Q3: Adel wrote a secret message that he didn't want anyone to read easily. To make it difficult to understand, he reversed it. He then thought that it wasn't enough, so he wanted to perform another minor change that would make it unrecognizable. Write a JavaScript program that takes a string s and prints it again after reversing it and making all vowel letters uppercase.</h2>`)
document.write(`<h2 style="color: blue;">A: Please open console for result and the code for steps</h2>`)
console.log("%cPractical Q3:", "color: red; font-size: 16px; font-weight: bold;")

let s = "Hey There, I'm glad to have you";
// UOy EvAh Ot dAlg m'I ,ErEhT yEH
const vowels = ["a", "e", "i", "o", "u"];
let reversed = s.split("").reverse();
let q3result = [];

for (let i = 0; i < reversed.length; i++) {
    let char = reversed[i];
    if (vowels.includes(char.toLowerCase())) {
        q3result.push(char.toUpperCase());
    } else {
        q3result.push(char);
    }
}
  
console.log(q3result.join(""));

document.write(`<h2 style="color: red;">Q4: Write a JavaScript program that takes a string and an array of forbidden letters. Your program should print the string after removing the forbidden letters from it and make all letters separated by hiphens -.</h2>`)
document.write(`<h2 style="color: blue;">A: Please open console for result and the code for steps</h2>`)
console.log("%cPractical Q4:", "color: red; font-size: 16px; font-weight: bold;")

let text = "Please";
let forbiddenLetters = ['r', 'x', 'p', 'a'];
let q4result = [];
// l-e-s-e
let splittedText = text.split("")
for (let i = 0; i < splittedText.length; i++) {
    let char = splittedText[i];
    if (!forbiddenLetters.includes(char.toLowerCase())) {
        q4result.push(char.toLowerCase());
    }
}

console.log(q4result.join("-"));