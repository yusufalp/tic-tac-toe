import React, { useState } from 'react';
import Board from '../Board/Board';
import Dropdown from '../Dropdown/Dropdown';
import Button from '../Button/Button';

const boardSizes = [];
for (let i = 3; i <= 20; i++) {
  boardSizes.push(i);
}

const Game = () => {
  const [rows, setRows] = useState(3);
  const [didStart, setDidStart] = useState(false);

  const handleReset = () => {
    setRows(3);
    setDidStart(false);
  }

  const renderedGame = didStart
    ? (<React.Fragment>
      <Button handleClick={handleReset}>Reset</Button>
      <Board
        rows={rows}
      />
    </React.Fragment>)
    : (<React.Fragment>
      <Button handleClick={() => setDidStart(true)}>Start the Game</Button>
      <Dropdown
        items={boardSizes}
        handleSelect={(e) => setRows(Number(e.target.value))}
      />
    </React.Fragment>)

  return (
    <div>
      {renderedGame}
    </div>
  );
}

export default Game;