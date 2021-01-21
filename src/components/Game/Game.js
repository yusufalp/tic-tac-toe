import React, { useState } from 'react';
import Board from '../Board/Board';
import Dropdown from '../Dropdown/Dropdown';
import Button from '../../utils/Button/Button';

const boardSizes = [];
for (let i = 3; i <= 20; i++) {
  boardSizes.push(i);
}

const Game = () => {
  const [rows, setRows] = useState(3);
  const [didStart, setDidStart] = useState(false);

  const handleStart = () => {
    setDidStart(true);
  }

  const handleReset = () => {
    setRows(3);
    setDidStart(false);
  }

  const renderedGame = didStart
    ? (<>
      <Button handleClick={handleReset}>Reset</Button>
      <Board
        rows={rows}
      />
    </>)
    : (<>
      <Button handleClick={handleStart}>Start the Game</Button>
      <Dropdown
        items={boardSizes}
        handleSelect={(e) => setRows(Number(e.target.value))}
      />
    </>)

  return (
    <div>
      {renderedGame}
    </div>
  );
}

export default Game;