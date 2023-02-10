import { useState } from "react";
import Dice from "./Dice";

function DiceBox() {
  const [numbers, setNumbers] = useState([2, 3, 5, 6, 1]);

  function rollDice() {
    setNumbers((prevNumbers) => {
      let newNumbers = prevNumbers.map((number) =>
        Math.floor(Math.random() * 6) + 1
      );
      return newNumbers;
    });
  }
  const diceRoll = numbers.map((number) => <Dice number={number} />);

  return (
    <section className="dice-container">
      <div className="dice-row">{diceRoll}</div>
      <button onClick={rollDice}>Roll the Dice</button>
    </section>
  );
}

export default DiceBox;
