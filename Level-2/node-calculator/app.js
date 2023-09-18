const readlineSync = require("readline-sync")

const num1 = Number(readlineSync.question("Please enter your first number "))
const num2 = Number(readlineSync.question("Please enter your second number "))

console.log("So your two numbers are " + num1 + " and " + num2)


// operators = ['add', 'subtract', 'multiply', 'divide']
// index = readlineSync.keyInSelect(operators, "Please choose the calculation to perform:")

const operation = readlineSync.question("Please enter the operation to perform: add, sub, mul, div ")

if (operation === "add") {
    console.log(num1 + num2)
}

else if (operation === "sub") {
    console.log(num1 - num2)
}

else if (operation === "mul") {
    console.log("The answer is " + (num1 * num2))
}

else if (operation === "div") {
    console.log("The answer is " + (num1 / num2))
}

else {
    console.log("Please enter a valid operation")
}
