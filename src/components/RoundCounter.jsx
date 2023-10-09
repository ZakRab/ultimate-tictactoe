import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";

const RoundCounter = () => {
  const { round } = useContext(GameContext);
  return (
    <>
      <div className="container h1 text-center">
        <span className="text-center">Tic-Tac-Toe </span>
        {/* <span>{round}</span> not really that necessary */}
      </div>
    </>
  );
};

export default RoundCounter;
