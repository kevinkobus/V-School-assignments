// let and const

// Replace all the `var`s with `let` and `const`. Alter the code however necessary to make sure this continues to work (so the pet's name **isn't** `"John"`, but instead `"spot"` is returned). You only need to delete `var` and insert `let` and `const`

// John is the pet owner, and his name should be stored differently than the other names.

// var name = "John"
// var age = 101

// function runForLoop(pets) {
//     var petObjects = []
//     for (var i = 0; i < pets.length; i++) {
//         var pet = { type: pets[i] }
//         var name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }

// runForLoop(["cat", "dog"])

// const name = "John"
// const age = 101

// function runForLoop(pets) {
//     var petObjects = []
//     for (let i = 0; i < pets.length; i++) {
//         let pet = { type: pets[i] }
//         let name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }

// runForLoop(["cat", "dog"])

// ES6 Arrow Functions

// ### **Task 1**

// Re-write this `.map()` using an arrow function:

// Be aware that if JavaScript sees a `{` directly after the `=>` it will think it's starting a function, and not starting an object, so the `:` will be an unexpected symbol.
// const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     return arr.map(function(carrot) {
//         return { type: "carrot", name: carrot }
//     })
// }

const carrots = ["bright orange", "ripe", "rotten"];

function mapVegetables(arr) {
  return arr.map((carrot) => {
    return { type: "carrot", name: carrot };
  });
}

console.log(mapVegetables(carrots));

// ### **Task 2**

// Re-write this `.filter()` ’s callback function using an arrow function:
const people = [
  {
    name: "Princess Peach",
    friendly: false,
  },
  {
    name: "Luigi",
    friendly: true,
  },
  {
    name: "Mario",
    friendly: true,
  },
  {
    name: "Bowser",
    friendly: false,
  },
];

// function filterForFriendly(arr) {
//     return arr.filter(function(person) {
//         return person.friendly
//     })
// }

function filterForFriendly(arr) {
  return arr.filter((person) => person.friendly);
}

console.log(filterForFriendly(people));

// ### **Task 3**

// Re-write the following functions to be arrow functions:

// function doMathSum(a, b) {
//     return a + b
// }

const doMathSum = (a, b) => a + b;
console.log(doMathSum(6, 8));

// var produceProduct = function(a, b) {
//     return a * b
// }

var produceProduct = (a, b) => a * b;
console.log(produceProduct(8, 9));

// ### **Task 4**

// Write a `printString` function that takes `firstName`, `lastName`, and `age` as parameters and returns a string like the following:
// Hi Kat Stark, how does it feel to be 40?
// firstName should default to "Jane" lastName should default to "Doe" age should default to 100

// function printString(firstName = "Jane", lastName = "Doe", age = 100) {
//   return "Hi ${firstName} ${lastName}, how does feel to be ${age}?";
// }
// console.log(printString());

const printString = (firstName = "Jane", lastName = "Doe", age = 100) =>
  `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`;

console.log(printString("Lilly Anne", "Kobus", 10));

