import React, { useState } from "react";
export const GameContext = React.createContext(null);

export function GameProvider(props) {
  const [isPlayer1, setIsPlayer1] = useState(false)
  const [round, setRound] = useState(1)
  class Square {
    constructor(player, isPlayed) {
      this.player = player;
      this.isPlayed = isPlayed;
    }
  }
  const square1 = new Square(isPlayer1, false)
  const square2 = new Square(isPlayer1, false)
  const square3 = new Square(isPlayer1, false)
  const square4 = new Square(isPlayer1, false)
  const square5 = new Square(isPlayer1, false)
  const square6 = new Square(isPlayer1, false)
  const square7 = new Square(isPlayer1, false)
  const square8 = new Square(isPlayer1, false)
  const square9 = new Square(isPlayer1, false)
  const [microBoard, setMicroBoard] = useState([square1, square2, square3, square4, square5 ,square6, square7, square8, square9])
  return (
    <GameContext.Provider
      value={{microBoard, setMicroBoard, isPlayer1,setIsPlayer1, round, setRound}}
    >
      {props.children}
    </GameContext.Provider>
  );
}
