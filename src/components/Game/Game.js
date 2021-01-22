import React, { useState, useEffect } from 'react';
import Board from '../Board/Board';
import Dropdown from '../Dropdown/Dropdown';
import Button from '../Button/Button';

const boardSizes = [];
for (let i = 3; i <= 20; i++) {
  boardSizes.push(i);
}

const Game = () => {
  const getDidStart = sessionStorage.getItem("did-start") === "true";
  const [rows, setRows] = useState(Number(sessionStorage.getItem("initial-rows-selected")) || 3);
  const [didStart, setDidStart] = useState(getDidStart || false);

  useEffect(() => {
    sessionStorage.setItem("initial-rows-selected", rows.toString());
    sessionStorage.setItem("did-start", didStart.toString());
  })

  const handleReset = () => {
    sessionStorage.clear();
    setRows(3);
    setDidStart(false);
  }

  const renderedGame = didStart
    ? (<React.Fragment>
      <Button handleClick={handleReset}>Main Menu</Button>
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