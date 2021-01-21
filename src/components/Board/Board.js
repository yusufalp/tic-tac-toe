import React, { useState } from 'react';
import Grid from '../Grid/Grid';
import './Board.css';

const Board = (props) => {
  const [isXsTurn, setIsXsTurn] = useState(true);
  const [allGrids, setAllGrids] = useState(Array(props.rows * props.rows).fill(null));

  const handleGridClick = (index) => {
    const grids = [...allGrids];
    if (grids[index]) { return; }
    grids[index] = isXsTurn ? "X" : "O";

    setAllGrids(grids);
    setIsXsTurn(!isXsTurn);
  }

  return (
    <div className="board">
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