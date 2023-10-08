import GameBoard from './components/GameBoard'
import './App.css';

function App() {
  return (
    <div className="bg-body-secondary container">
      <h1 className='text-center'>Tic-Tac-Toe</h1>
      <GameBoard></GameBoard>
    </div>
  );
}

export default App;
