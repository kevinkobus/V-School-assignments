var readline = require("readline-sync");

var input = readline
  .question("What phrase would you like to encrypt? ")
  .toLowerCase();

  console.log("Your phrase is: " + input)

var shift = parseInt(
  readline.question("How many letters would you like to shift? ")
);

console.log("You would like to shift: " + shift + " letters")

