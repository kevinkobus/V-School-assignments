const readline = require("readline-sync");

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

//   console.log(randomInteger(0, 2))

//pick player question
const pickPlayer = readline.keyIn("Hello, would you like to be 'm' = Mario or 'l' = Luigi? ");

// instantiate player
const activePlayer = new Player({name: activePlayer.name, status: "Big", totalCoins: 0, hasStar: false });

class Player {

  constructor(name, status, totalCoins, hasStar) {
    this.name = name;
    this.status = status;
    this.totalCoins = totalCoins;
    this.hasStar = hasStar;
  }

  setName() {
  if (pickPlayer === "m" || pickPlayer === "M") {
    activePlayer.name = Mario
  }
  else if (pickPlayer === "l" || pickPlayer === "L") {
    activePlayer.name = Luigi
  }
  else {
    console.log("That wasn't an option");
  }
  }

//   gotHit() {}

//   gotPowerUp() {}

//   addCoin() {}

  print() {
    console.log(`Name: ${this.name}\nStatus: ${this.status}\n${this.totalCoins}`);
  }
}
