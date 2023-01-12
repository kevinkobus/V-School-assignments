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
    if (this.hasStar === true) {
      console.log("You got hit and your star protected you, but now it's gone");
      this.hasStar = false;
    } else if (this.status === "Powered Up") {
      this.status = "Big";
    } else if (this.status === "Big") {
      this.status = "small";
    } else {
      this.status = "dead";
      console.log(
        "You were small and couldn't survive another hit. You have perished"
      );
      process.exit();
    }
  }

  gotPowerUp() {
    if (this.status === "Powered Up") {
      console.log("You've earned a star!");
      this.hasStar = true;
    } else if (this.status === "Big") {
      this.status = "Powered Up";
    } else {
      this.status = "Big";
    }
  }
  addCoin() {
    this.totalCoins++;
  }

  print() {
    console.log(
      `Name: ${this.name}\nStatus: ${this.status}\nTotal Coins: ${this.totalCoins}\n`
    );
    if (this.hasStar === true) {
      console.log("You have a star\n");
    }
  }
}

let randomInteger = () => {
  let num = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
  if (num === 0) {
    console.log("Smack, you got hit!")
    activePlayer.gotHit();
  } else if (num === 1) {
    console.log("Yes!, you've been powered up")
    activePlayer.gotPowerUp();
  } else if (num === 2) {
    console.log("Nice!, you earned a coin")
    activePlayer.addCoin();
  }
  activePlayer.print();
}

//pick player question
const pickPlayer = readline.keyIn(
  "Hello, would you like to be 'm' = Mario or 'l' = Luigi? "
);

// instantiate player
const activePlayer = new Player();
activePlayer.setName(pickPlayer);

// console.log(activePlayer.name)

setInterval(randomInteger, 3000);
