import GameBoard from './components/GameBoard'
import './App.css';
import Lobby from './components/Lobby'
function App() {
  return (
    <div className="bg-body-secondary container">
      <h1 className='text-center'>Tic-Tac-Toe</h1>
      <GameBoard></GameBoard>
      <Lobby></Lobby>
    </div>
  );
}

export default App;
