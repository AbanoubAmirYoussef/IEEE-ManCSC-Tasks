// Practical:

// Q1
const user = {
  name: "Ashraf Ben Sharqy",
  age: 29,
  teams: ["Wydad", "Al Hilal", "Zamalek", "Al Gazira", "Al-Rayyan"],
  nationalTeam: {
    name: "Morocco",
    best: {
      africanCupOfNations: ["Champion", 2018],
      worldCup: ["4th", 2022],
    },
  },
};
// Q1 Answer
const { teams: [, , team, ,], nationalTeam: { best: { worldCup: [rank], }, }, } = user;
console.log(team, rank);

//-------------------------------------------------------------------------------//

// Q2
const player = {
  name: "Samir Kamona",
  club: "Al Ahly",
  score: 25,
};
// Q2 Answer
const fantasyPlayer = { ...player, score: 50, position: "ST" };
console.log(fantasyPlayer);

//-------------------------------------------------------------------------------//

// Q3
const input = [
  "handOn",
  "hands",
  "hanDLes",
  "Handcuffs",
  "handmade",
  "in-hands",
  "HANDINGLY",
];
// Q3 Answer
function filterItems(arr) {
  return arr.filter((ele) => /^hand.*(s|y|le)$/i.test(ele));
}
console.log(filterItems(input));

//-------------------------------------------------------------------------------//

// Q4
// Applying the concept of closures, create a counter using JavaScript and HTML. The counter should be able to increment, decrement, and reset its value, demonstrating the practical use of closures to maintain state between function calls.
// Q4 Answer
const counter = (function () {
  let count = 0;

  function update() {
    document.getElementById("count").textContent = `Counter: ${count}`;
  }

  return {
    increment: function () {
      count++;
      update();
    },
    decrement: function () {
      count--;
      update();
    },
    reset: function () {
      count = 0;
      update();
    },
  };
})();
