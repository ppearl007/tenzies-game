import { useEffect, useState } from "react";
import Die from "./components/Die";
import "./App.css";
import { data } from "../public/data";

function App() {
  // Goal is to try and roll 10 dice that are all the same
  // you can click one or more die to hold it so it doesn't change on the next roll
  // keep holding more of the same dice before roll till they're all the same

  const [allDice, setAllDice] = useState(data);

  const randomGen = () => Math.floor(Math.random() * 6 + 1);

  const handleClick = () => {
    setAllDice((prevDice) =>
      prevDice.map((die) => {
        if (die.isSelected === false) {
          return { ...die, value: randomGen() };
        } else {
          return { ...die };
        }
      })
    );
  };

  const selectDie = (e, id) => {
    e.stopPropagation();
    setAllDice((prevDice) =>
      prevDice.map((die) => {
        if (die.id === id) {
          return { ...die, isSelected: !die.isSelected };
        } else {
          return { ...die };
        }
      })
    );
  };

  const diceElements = allDice.map((die) => (
    <Die key={die.id} {...die} selectDie={selectDie} />
  ));

  return (
    <main className="main">
      <h1 className="header">Tenzies</h1>
      <p className="body">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">{diceElements}</div>
      <button className="rolldice-button" onClick={handleClick}>
        Roll
      </button>
    </main>
  );
}

export default App;
