import React from 'react';
import './App.css';
import Board from './components/Board/Board';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Tic-Tac-Toe</h1>
      </header>
      <main>
        <Board
          rows={4}
        />
      </main>
    </div>
  );
}

export default App;
