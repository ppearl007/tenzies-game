import { useState } from "react";
import Die from "./components/Die";
import "./App.css";

function App() {
  const [allDice, setAllDice] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const diceElements = allDice.map((die) => <Die key={die} value={die} />);

  return (
    <main className="main">
      <h1 className="header">Tenzies</h1>
      <p className="body">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice-container">{diceElements}</div>
      <button className="rolldice-button">Roll</button>
    </main>
  );
}

export default App;
