const readline = require("readline-sync");

class Player {
  constructor(name, status = "Big", totalCoins = 0, hasStar = false) {
    this.name = name;
    this.status = status;
    this.totalCoins = totalCoins;
    this.hasStar = hasStar;
  }

  setName() {
    if (pickPlayer === "m" || pickPlayer === "M") {
      this.name = "Mario";
    } else if (pickPlayer === "l" || pickPlayer === "L") {
      this.name = "Luigi";
    } else {
      console.log("That wasn't an option");
    }
  }

    gotHit() {

    }

    gotPowerUp() {

    }

    addCoin() {

    }

  print() {
    console.log(
      `Name: ${this.name}\nStatus: ${this.status}\nTotal Coins: ${this.totalCoins}`
    );
  }

}

//pick player question
const pickPlayer = readline.keyIn(
  "Hello, would you like to be 'm' = Mario or 'l' = Luigi? "
);

// instantiate player
const activePlayer = new Player();
activePlayer.setName(pickPlayer);

// console.log(activePlayer.name)


let randomInteger (min, max) => {
  let num = Math.floor(Math.random() * (max - min + 1)) + min;

  if (num === 0) {
    gotHit()
  }
  else if (num === 1) {
    gotPowerUp()
  }
  else if (num === 2) {
    addCoin()
  }


}





// activePlayer.print()