import React, { useState, useEffect } from 'react';
import Grid from '../Grid/Grid';
import Dropdown from '../Dropdown/Dropdown';
import Button from '../Button/Button';
import './Board.css';
import { announceWinner } from '../AnnounceWinner/AnnounceWinner';

const boardSizes = [];
for (let i = 3; i <= 20; i++) {
  boardSizes.push(i);
}

const Board = () => {
  const [rows, setRows] = useState(Number(sessionStorage.getItem("initial-rows-selected")) || 3);
  const [isXsTurn, setIsXsTurn] = useState(sessionStorage.getItem("isXsTurn") ? sessionStorage.getItem("isXsTurn") === "true" : true);
  const [allGrids, setAllGrids] = useState(JSON.parse(sessionStorage.getItem("played-grids")) || Array(rows * rows).fill(null));

  useEffect(() => {
    sessionStorage.setItem("initial-rows-selected", rows.toString());
    sessionStorage.setItem("played-grids", JSON.stringify(allGrids));
    sessionStorage.setItem("isXsTurn", isXsTurn.toString());
  })

  let winner = announceWinner(rows, allGrids);
  let status = "";

  if (!winner) {
    const isNull = currentValue => currentValue === null;
    if (!allGrids.some(isNull)) {
      status = "Game over, it is a tie"
    } else {
      status = `Next player: ${isXsTurn ? "X" : "O"}`;
    }
  } else {
    status = winner;
  }

  let winnerClassName = "";
  if (winner === "Winner is X") {
    winnerClassName = "red-win";
  } else if (winner === "Winner is O") {
    winnerClassName = "green-win";
  }

  const handleGridClick = (index) => {
    if (winner) { return; }

    const grids = [...allGrids];
    if (grids[index]) { return; }

    grids[index] = isXsTurn ? "X" : "O";

    setAllGrids(grids);
    setIsXsTurn(!isXsTurn);
  }

  const handleReset = (e) => {
    let selectedValue = e.target.value;
    let selectedRows = Number(selectedValue) === 0 ? rows : Number(selectedValue);
    setIsXsTurn(true);
    setRows(selectedRows)
    setAllGrids(Array(selectedRows * selectedRows).fill(null));
  }

  return (
    <div className="board">
      <Dropdown
        items={boardSizes}
        handleSelect={(e) => handleReset(e)}
      />
      <p className={`status ${winnerClassName}`}>{status}</p>
      {allGrids.map((grid, i) => {
        return (
          <Grid
            key={i}
            index={i}
            rows={rows}
            value={grid}
            handleGridClick={handleGridClick}
          />
        )
      })
      }
      <Button handleClick={handleReset}>Reset</Button>
    </div>
  );
}

export default Board;