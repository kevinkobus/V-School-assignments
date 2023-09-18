const readlineSync = require("readline-sync")

var num1 = readlineSync.question("Please enter your first number")
var num2 = readlineSync.question("Please enter your second number")

console.log("So your two numbers are " + num1 + " and " + num2)

var operation = readlineSync.question("Please enter the operator to perform")
  operators = ['add', 'subtract', 'multiply', 'divide']
  index = readlineSync.keyInSelect(operators, "Which operator?")
  