import './App.css';
import Board from './components/Board/Board';
// import Game from './components/Game/Game';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Tic-Tac-Toe</h1>
      </header>
      <main>
        <Board />
        {/* <Game /> */}
      </main>
    </div>
  );
}

export default App;
