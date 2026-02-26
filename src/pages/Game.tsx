import React, { useState } from "react";
import BingoBoard from "../components/BingoBoard";
export default function Game() {
  const [activeNumber, setActiveNumber] = useState(0);
  const [calledNumbers, setCalledNumbers] = useState<number[]>([]);

  const clearNumbers = () => {
    setActiveNumber(0);
    setCalledNumbers([]);
  };

  const newNumber = () => {
    let number = Math.floor(Math.random() * 75) + 1;
    if (!calledNumbers.includes(number)) {
      setActiveNumber(number);
      setCalledNumbers([...calledNumbers, number]);
      // return number
    } else {
      newNumber();
      // return Math.floor(Math.random() * 75) + 1
    }
  };
  return (
    <div>
      Game
      <div className="card">
        <button onClick={() => clearNumbers()}>clear numbers </button>
        <button onClick={() => newNumber()}>count is {activeNumber}</button>
      </div>

      <BingoBoard calledNumbers={calledNumbers} />
    </div>
  );
}
