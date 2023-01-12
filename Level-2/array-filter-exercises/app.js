// 1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
function fiveAndGreaterOnly(arr) {
    const result = arr.filter(function (num) {
        if (num > 5) {
            return true
        }
    })
    return result
}
// test
console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]

// 2) Given an array of numbers, return a new array that only includes the even numbers.
function evensOnly(arr) {
    const result = arr.filter(function (num) {
        if (num % 2 === 0) {
            return true
        }
    })
    return result
}
console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]

// 3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
function fiveCharactersOrFewerOnly(arr) {
    const result = arr.filter(function (strings) {
        if (strings.length <= 5)
            return true
    })
    return result
}

console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]

// 4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
//   function peopleWhoBelongToTheIlluminati(arr){
//     const celebrities = arr.filter(function(celebs){
//       if(celebs.member === true){
//         return true
//       }
//     })
//    return celebrities 
// }

function peopleWhoBelongToTheIlluminati(arr) {
    const celebrities = arr.filter(celebs => celebs.member === true)
    return celebrities
}
console.log(peopleWhoBelongToTheIlluminati([
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]));
//[ { name: 'Angelina Jolie', member: true },
//  { name: 'Paris Hilton', member: true },
//  { name: 'Bob Ziroll', member: true } ]

// 5) Make a filtered list of all the people who are old enough to see The Matrix (older than 18)
function ofAge(arr) {
    const people = arr.filter(adults => adults.age >= 18)
    return people
}
console.log(ofAge([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]));

  //[ { name: 'Angelina Jolie', age: 80 },
  //  { name: 'Bob Ziroll', age: 100 } ]