import { useEffect, useState } from "react";
import Die from "./components/Die";
import "./App.css";
import { data } from "../public/data";

function App() {
  // Goal is to try and roll 10 dice that are all the same
  // you can click one or more die to hold it so it doesn't change on the next roll
  // keep holding more of the same dice before roll till they're all the same

  const [allDice, setAllDice] = useState(data);
  // const [buttonDisplay, setButtonDisplay] = useState("Roll");

  const randomGen = () => Math.floor(Math.random() * 6 + 1);

  useEffect(() => {
    setAllDice(allDice.map((die) => ({ ...die, value: randomGen() })));
  }, []);

  const buttonStatus = allDice.every((die) => die.value === allDice[1].value);

  // alternative /imperative method to update the button is to use buttonUpdate()
  // buttonDisplay state will have to be enabled and displayed in <button>
  // button update method will then be called in selectDie

  // const buttonUpdate = () => {
  //   let arr = [];
  //   for (let i = 0; i < 10; i++) {
  //     if (i > 0) {
  //       // console.log(i);
  //       let j = i - 1;
  //       allDice[i].value === allDice[j].value
  //         ? arr.push(allDice[i].value)
  //         : console.log(allDice[i].value);
  //     }
  //   }

  //   if (arr.length === 9) {
  //     setButtonDisplay("Reset Game");
  //   }

  // };

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

    // buttonUpdate();
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
        {buttonStatus ? "Restart Game" : "Roll"}
        {/* {buttonDisplay} */}
      </button>
    </main>
  );
}

export default App;
