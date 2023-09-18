// capitalizeAndLowercase("HelLo") // => "HELLOhello"

// function greeting(string) {
//     const combined = ((string.toUpperCase()).concat(string.toLowerCase()))
//     return combined
//   }
//       console.log(greeting("HelLo"))


// findMiddleIndex("Hello") // => 2
// findMiddleIndex("Hello World") // => 5

// function findMiddleIndex(string) {
//     const half = Math.floor(string.length / 2)
//     return half
//   }
//   console.log(findMiddleIndex("Hello World"))

// returnFirstHalf("Hello") // => "He"
// returnFirstHalf("Hello World") // => "Hello"

// function returnFirstHalf(string) {
//     const firstHalf = string.slice(0, 5)
//     return firstHalf
// }
// console.log(returnFirstHalf("Hello World"))

// capitalizeAndLowercase("Hello") // => "HEllo"
// capitalizeAndLowercase("Hello World") // => "HELLO world"

function capitalizeAndLowercase(string) {
    const half = Math.floor(string.length / 2)
    const firstHalf = string.slice(0, half)
    const upper = firstHalf.toUpperCase()
    const secondHalf = string.slice((half), string.length)
    const lower = secondHalf.toLowerCase()
    const combined = upper + lower
    return combined
  }
    console.log(capitalizeAndLowercase("Hello World"))


