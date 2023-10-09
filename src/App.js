import GameBoard from "./components/GameBoard";
import "./App.css";
import Lobby from "./components/Lobby";
import RoundCounter from "./components/RoundCounter";
function App() {
  return (
    <div className="bg-body-secondary container">
      <RoundCounter></RoundCounter>
      <GameBoard></GameBoard>
      <Lobby></Lobby>
    </div>
  );
}

export default App;
