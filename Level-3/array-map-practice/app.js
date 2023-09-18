/* 
.map() method:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
*/

/*
Challenge 1:
Given an array of numbers, return an array of each number, squared
*/
const nums = [1, 2, 3, 4, 5]
// -->       [1, 4, 9, 16, 25]
// Your code here

// const numsSquared = nums.map(x => x * x)
// console.log(numsSquared)

// const numsSquared = nums.map(function(number) {
//     return number * number
// })
// console.log(numsSquared)

/*
Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/

const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here

// const uppercase = names.map((name) => {
//     return name[0].toUpperCase() + name.slice(1)
// })
// console.log(uppercase)

// const uppercase = names.map((name) => {
//     return `${name[0].toUpperCase()}${name.slice(1)}`
// })
// console.log(uppercase)

/*
Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>, <p>Charmander</p>, <p>Squirtle</p>"]
*/

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>, <p>Charmander</p>, <p>Squirtle</p>"]
// Your code here

// const peeps = pokemon.map(name => {
//   return `<p>${name}</p>`
// })

// console.log(peeps)

// can also all be on the same line because arrow functions have implicit returns
const peeps = pokemon.map(name => `<p>${name}</p>`)

console.log(peeps)