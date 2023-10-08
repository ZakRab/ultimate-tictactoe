import React, { useState } from "react";
export const GameContext = React.createContext(null);

export function GameProvider(props) {
  const [isPlayer1, setIsPlayer1] = useState(false)
  class Square {
    constructor(player, isPlayed) {
      this.player = player;
      this.isPlayed = isPlayed;
    }
  }
  const square = new Square(isPlayer1, false)
    const [microBoard, setMicroBoard] = useState([square, square, square, square, square ,square, square, square, square])
  return (
    <GameContext.Provider
      value={{microBoard, setMicroBoard}}
    >
      {props.children}
    </GameContext.Provider>
  );
}
