// Green slopes
// Use the Rest Operator to help this function return an array of Animals, no matter how many animals are passed to it:

// function collectAnimals(/*your code here*/) {
//     /*and here*/
// }

function collectAnimals(...arr) {
   return arr
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
