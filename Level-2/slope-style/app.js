// Green slopes
// Use the Rest Operator to help this function return an array of Animals, no matter how many animals are passed to it:

// function collectAnimals(/*your code here*/) {
//     /*and here*/
// }

function collectAnimals(...arr) {
  return arr;
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));
// ["dog", "cat", "mouse", "jackolope", "platypus"]

// Write a function that returns a food object with the array names as properties. You'll use an ES6 shorthand syntax that becomes useful when a variable name is mentioned twice in both the name and value of properties in your object:
// - Hint

// { item } is shorthand for { item: item }

// function combineFruit(fruit, sweets, vegetables){
//     return {}
// }

function combineFruit(fruit, sweets, vegetables) {
  return { fruit, sweets, vegetables };
}

console.log(combineFruit(["apple", "pear"], ["cake", "pie"], ["carrot"]));
//=> {
//         fruit: ["apple", "pear"],
//         sweets: ["cake", "pie"],
//         vegetables: ["carrot"]
//      }

// Use destructuring to use the property names as variables. Destructure the object in the parameter:

// - Hint
// - This function is expecting two variables to be defined in the parameter list.

// function parseSentence(_________){
//   return `We're going to have a good time in ${location} for ${duration}`
// }

function parseSentence({ location, duration }) {
  return `We're going to have a good time in ${location} for ${duration}`;
}

console.log(
  parseSentence({
    location: "Burly Idaho",
    duration: "2 weeks",
  })
);

// Use array destructuring to make this code ES6:

// function returnFirst(items){
//     const firstItem = items[0]; /*change this line to be es6*/
//     return firstItem
// }

function returnFirst(items) {
  const [firstItem] = items;
  return firstItem;
}

console.log(returnFirst(["bat", "ball", "glove"]));

// Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:

const favoriteActivities = [
  "magnets",
  "snowboarding",
  "philanthropy",
  "janitor work",
  "eating",
];

// function returnFavorites(arr){
//     /*your code here*/
//     return "My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav";
// }

function returnFavorites(arr) {
  const [firstFav, secondFav, thirdFav] = arr;
  return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`;
}

console.log(returnFavorites(favoriteActivities));

// Blue Square
// Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in. You may write it assuming you will always recieve three arrays if you would like to.

// function combineAnimals() {

// }

function combineAnimals(array, ...moreArrays) {
 return [...array, ...moreArrays]
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

// ["dog", "cat", "mouse", "jackolope", "platypus"]

// Black Diamonds
// Try to make the following function more ES6y:

// function product(a, b, c, d, e) {
//   var numbers = [a,b,c,d,e];

//   return numbers.reduce(function(acc, number) {
//     return acc * number;
//   }, 1)
// }

let product = (a, b, c, d, e) => {
  var numbers = [a,b,c,d,e]
  return numbers.reduce((acc, number) => acc * number, 1)
}

console.log(product(1, 2, 3, 4, 5))

// Make the following function more ES6y. Use at least both the rest and spread operators:

// function unshift(array, a, b, c, d, e) {
//   return [a, b, c, d, e].concat(array);
// }

const array = []

let unshift = (array, a, b, c, d, e) => [a, b, c, d, e, ...array]

console.log(unshift(array))

// Double Black Diamond
// Write some destructuring code to help this function out. Use the ES6 shorthand that helps make the syntax look less redundant to simplify it:

// function populatePeople(names){
//     return names.map(function(name){
//         name = name.split(" ");
//         // your code
//         return {
//             firstName: firstName,
//             lastName: lastName
//         }
//     })
// }

function populatePeople(names) {
  return names.map(function(name){
    name = name.split(" ")    
  
return [{"firstName: " + name.[0] + "," + " lastName:" + name.[1]]
})
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))

// populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]
