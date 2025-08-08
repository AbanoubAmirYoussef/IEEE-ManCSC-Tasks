// Practical:

// Q1.1 Static properties
class User {
  static role = "Admin";

  static get showRole() {
    console.log(`The role is ${User.role}`);
  }
}
User.showRole; // The role is Admin

// Q1.2 Private  properties
class BankAccount {
  #balance;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  get showBalance() {
    console.log(`Balance: ${this.#balance}`);
  }
}
const acc = new BankAccount(1000);
acc.showBalance; // Balance: 1000

// Q1.3 Setters and getters
class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}
const p1 = new Person("Ahmed");
console.log(p1.name); // Ahmed

// Q1.4 Method chaining
class Counter {
  constructor() {
    this.value = 0;
  }
  increment() {
    this.value++;
    return this;
  }
  decrement() {
    this.value--;
    return this;
  }
  get show() {
    console.log(this.value);
    return this;
  }
}

const c = new Counter();
c.increment().increment().decrement().show; // 1

//-------------------------------------------------------------------------------//

// Q2
/*
1- Hey, I'm undefined undefined // we cant use this word in arrow function
2- Hey, I'm Ahmed Hafez
3- Hey, I'm Ahmed Hafez // we call it as method by player
4.1- Hey, I'm undefined undefined // Theres nothing to print 
4.1- Hey, I'm Ahmed Hafez // calling via player obj
*/

//-------------------------------------------------------------------------------//

// Q3
import { Vehicle } from './Vehicle.js';
import { Bicycle } from './Bicycle.js';

const car = new Vehicle();
car.honkHorn(); // beep beep

const bike = new Bicycle();
bike.honkHorn(); // honk honk

//-------------------------------------------------------------------------------//

// Q4
Date.prototype.addHours = function(H) {
  this.setHours(this.getHours() + H);
};

let date = new Date(2022, 10, 3, 12, 38); // 3 Nov 2022, 12:38
date.addHours(4);
console.log(date); // 3 Nov 2022, 16:38

//-------------------------------------------------------------------------------//

// Q5 ( Used chatGPT :( )
function* fibonacci() {
  let a = 0, b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const fib = fibonacci();
console.log(fib.next().value); // 0
console.log(fib.next().value); // 1
console.log(fib.next().value); // 1
console.log(fib.next().value); // 2
console.log(fib.next().value); // 3
