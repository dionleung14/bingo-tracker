import React, { useState } from "react";
import CustomBingoBoard from "../components/CustomBingoBoard";
import { useParams } from "react-router-dom";
export default function CustomGame() {
  const [activeNumber, setActiveNumber] = useState(0);
  const [calledNumbers, setCalledNumbers] = useState<number[]>([]);

  const clearNumbers = () => {
    setActiveNumber(0);
    setCalledNumbers([]);
  };

  const maxNums = parseInt(useParams().maxNums || "75");

  const markNumber = (number: number) => {
    if (!calledNumbers.includes(number)) {
      setActiveNumber(number);
      setCalledNumbers([...calledNumbers, number]);
    }
  };

  return (
    <div>
      Custom Game
      <div className="card">
        <button onClick={() => clearNumbers()}>clear numbers (new game)</button>
        {activeNumber?<p>Last number is {activeNumber}</p>:null}
      </div>
      <CustomBingoBoard
        calledNumbers={calledNumbers}
        maxNums={maxNums}
        clickToActivate={markNumber}
      />
    </div>
  );
}
