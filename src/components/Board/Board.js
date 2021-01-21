import React, { useState } from 'react';
import Grid from '../Grid/Grid';
import './Board.css';

const Board = (props) => {
  const [isXsTurn, setIsXsTurn] = useState(true);
  const [allGrids, setAllGrids] = useState(Array(props.rows * props.rows).fill(null));

  const announceWinner = () => {
    let result = [];

    let newArr = [];
    let index = 0;

    for (let i = 0; i < props.rows; i++) {
      newArr = [];
      for (let j = 0; j < props.rows; j++) {
        newArr.push(allGrids[j + index]);
      }
      result.push(newArr);
      index += props.rows;
    }

    for (let i = 0; i < props.rows; i++) {
      index = i;
      newArr = [];
      for (let j = 0; j < props.rows; j++) {
        newArr.push(allGrids[index]);
        index += props.rows;
      }
      result.push(newArr);
    }

    newArr = [];
    index = 0;
    for (let i = 0; i < props.rows; i++) {
      newArr.push(allGrids[i + index]);
      index += props.rows;
    }
    result.push(newArr);

    newArr = [];
    index = props.rows - 1;
    let start = allGrids.length - 1;
    for (let i = 0; i < props.rows; i++) {
      newArr.push(allGrids[start - index]);
      index += props.rows - 1;
    }
    result.push(newArr);

    const isX = currentValue => currentValue === "X";
    const isO = currentValue => currentValue === "O";
    for (let i = 0; i < result.length; i++) {
      let isAllX = result[i].every(isX);
      let isAllO = result[i].every(isO)
      if (isAllX || isAllO) {
        return `Winner is ${isAllX ? "X" : "O"}`;
      }
    }
  }

  let winner = announceWinner();
  let status = "";

  if (!winner) {
    status = `Next player: ${isXsTurn ? "X" : "O"}`;
  } else {
    status = winner;
  }

  const handleGridClick = (index) => {
    if (winner) { return; }

    const grids = [...allGrids];
    if (grids[index]) { return; }

    grids[index] = isXsTurn ? "X" : "O";

    setAllGrids(grids);
    setIsXsTurn(!isXsTurn);
  }

  return (
    <div className="board">
      <p>{status}</p>
      {allGrids.map((grid, i) => {
        return (
          <Grid
            key={i}
            index={i}
            rows={props.rows}
            value={grid}
            handleGridClick={handleGridClick}
          />
        )
      })
      }
    </div>
  );
}

export default Board;