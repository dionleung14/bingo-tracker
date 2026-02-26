import React, { useState } from "react";
import BingoBoard from "../components/BingoBoard";
import { useParams } from "react-router-dom";
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
    } else {
      newNumber();
    }
  };

  const maxNums = parseInt(useParams().maxNums || "75");
  
  return (
    <div>
      Game
      <div className="card">
        <button onClick={() => clearNumbers()}>clear numbers </button>
        <button onClick={() => newNumber()}>Current number is {activeNumber}</button>
      </div>

      <BingoBoard calledNumbers={calledNumbers} maxNums={maxNums} />
    </div>
  );
}
