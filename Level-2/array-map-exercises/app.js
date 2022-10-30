// 1) Make an array of numbers that are doubles of the first array
function doubleNumbers(arr) {
    let result = arr.map(function (num) {
        return num * 2
    })
    return result
}

console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

// 2) Take an array of numbers and make them strings
function stringItUp(arr) {
    let result = arr.map(function (num) {
        return String(num)
    })
    return result
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"] 

// 3) Capitalize the first letter of each name and make the rest of the characters lowercase
function capitalizeNames(arr) {
        let capitalizedNames = arr.map(function (names) {
            let firstLetter = names.charAt(0)
            firstLetter = firstLetter.toUpperCase()
            let remainingLetters = names.slice(1).toLowerCase()
            let fullNames = firstLetter + remainingLetters
            return fullNames
        })
        return capitalizedNames
    }
    
    console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 

// Output:
// ["John", "Jacob", "Jingleheimer", "Schmidt"]    

// 4) Make an array of strings of the names
function namesOnly(arr){
 const names = arr.map(function(arr){
    return arr.name
})
 return names
}

console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

// 5) Make an array of strings of the names saying whether or not they can go to The Matrix
function makeStrings(arr){
    const names = arr.map(function(arr){
     if (arr.age > 18){
       return arr.name + " can go to The Matrix"
     }
      else {
        return arr.name + " is under age!!"
      }
    })  
    return names 
   }
   
   console.log(makeStrings([
       {
           name: "Angelina Jolie",
           age: 80
       },
       {
           name: "Eric Jones",
           age: 2
       },
       {
           name: "Paris Hilton",
           age: 5
       },
       {
           name: "Kayne West",
           age: 16
       },
       {
           name: "Bob Ziroll",
           age: 100
       }
   ]));

// ["Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!",
// "Kayne West is under age!!",
// "Bob Ziroll can go to The Matrix"]


// 6) Make an array of the names in h1s, and the ages in h2s
function readyToPutInTheDOM(arr){
    const people = arr.map(function(arr){
      return "<h1>" + arr.name + "</h1>" + "<h2>" + arr.age + "<h/2>"
     })
    return people
   }
   
   console.log(readyToPutInTheDOM([
       {
           name: "Angelina Jolie",
           age: 80
       },
       {
           name: "Eric Jones",
           age: 2
       },
       {
           name: "Paris Hilton",
           age: 5
       },
       {
           name: "Kayne West",
           age: 16
       },
       {
           name: "Bob Ziroll",
           age: 100
       }
   ]));
// ["<h1>Angelina Jolie</h1><h2>80</h2>",
// "<h1>Eric Jones</h1><h2>2</h2>",
// "<h1>Paris Hilton</h1><h2>5</h2>",
// "<h1>Kayne West</h1><h2>16</h2>",
// "<h1>Bob Ziroll</h1><h2>100</h2>"]