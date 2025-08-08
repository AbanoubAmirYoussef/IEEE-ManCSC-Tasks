// Practical
// Q1
const xhr = new XMLHttpRequest();
xhr.open("GET", "http://numbersapi.com/random/trivia?json");
xhr.onload = function () {
  if (xhr.status === 200) {
    console.log("Data:", JSON.parse(this.responseText));
  }
};
xhr.send();

async function getNumberFact() {
  const response = await fetch("http://numbersapi.com/random/trivia?json");
  const data = await response.json();
  console.log("Data:", data);
}
getNumberFact();

// Q2
function replaceOddNumbers(str) {
  return str.replace(/\d+/g, (match) => {
    return parseInt(match) % 2 === 1 ? "BEEP" : match;
  });
}

const input = "I have 12 cars, 11 of which are 89 years old";
const output = replaceOddNumbers(input);
console.log(output);

// Q3
async function skyWars() {
  await fetch("https://swapi.info/api/planets/4")
    .then((response) => response.json())
    .then((data) => console.log(data.name))
    .catch((error) => console.error(error));
}
skyWars();

// Q4
async function fakeStore() {
  const products = [1, 3, 4];
  let totalPrice = 0;
  const requests = products.map((productId) =>
    fetch(`https://fakestoreapi.com/products/${productId}`)
  );

  try {
    const responses = await Promise.all(requests);
    const data = await Promise.all(responses.map((res) => res.json()));
    console.log("shopping cart:");
    data.forEach((product) => {
      if (product.id === 1) {
        console.log(
          `3 items from product: ${product.id} unit price: ${product.price}`
        );
      } else if (product.id === 3) {
        console.log(
          `5 items from product: ${product.id} unit price: ${product.price}`
        );
      } else if (product.id === 4) {
        console.log(
          `4 items from product: ${product.id} unit price: ${product.price}`
        );
      }
    });
    totalPrice += data[0].price * 3 + data[1].price * 5 + data[2].price * 4;
    console.log(`total price: ${totalPrice}`);
  } catch (err) {
    console.error("Error fetching data:", err);
  }
}

fakeStore();

// Q5
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

wait(5000)
  .then(() => {
    console.log("Hey there!");
    return wait(3000);
  })
  .then(() => {
    console.log("This code will help you understand");
    return wait(2000);
  })
  .then(() => {
    console.log("Asynchronous Programming");
    return wait(3000);
  })
  .then(() => {
    console.log("What The Callback Hell!!!");
    return wait(1000);
  })
  .then(() => {
    console.log("I AM STUCK");
  });

// Q6
class Instructor {
  constructor(name) {
    if (Instructor.instance) {
      return Instructor.instance;
    }
    this.name = name;
    Instructor.instance = this;
  }
}
// Student Class
class Student {
  constructor(name, needsInstructor = false) {
    this.name = name;
    this.instructor = needsInstructor ? new Instructor("Mr. John") : null;
  }
}
// Test
const student1 = new Student("Ali", true);
const student2 = new Student("Youssef", true);
const student3 = new Student("Mark", false);

console.log(student1.instructor); // name: "Mr. John"
console.log(student2.instructor); // name: "Mr. John"
console.log(student3.instructor); // null

// Q7
class Admin {
  constructor(name) {
    this.name = name;
    this.role = "admin";
  }
}

class User {
  constructor(name) {
    this.name = name;
    this.role = "user";
  }
}

// Factory
function UserFactory(type, name) {
  if (type === "admin") return new Admin(name);
  if (type === "user") return new User(name);
}

// Test
const user1 = UserFactory("admin", "Peter");
const user2 = UserFactory("user", "Ali");

console.log(user1); // Admin { name: 'Peter', role: 'admin' }
console.log(user2); // User { name: 'Ali', role: 'guest' }
