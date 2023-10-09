import { io } from "socket.io-client";
import { useEffect, useRef, useContext } from "react";
import { GameContext } from "../context/GameContext";
const useSocket = (lobbyKey) => {
  const socketRef = useRef;
  const {
    microBoard,
    setMicroBoard,
    isPlayer1,
    setIsPlayer1,
    round,
    setRound,
  } = useContext(GameContext);

  useEffect(() => {
    socketRef.current = io("http://localhost:3000", {
      // changes based on where its running
      query: {
        player: isPlayer1,
        lobbyKey,
      },
    });

    socketRef.current.on("user connect", () => {});

    socketRef.current.on("user disconnect", ({ displayName }) => {});
  }, [lobbyKey]);

  function StartGame() {
    let card = RandCard();
    socketRef.current.emit("start-game", card);
  }
  function SendSketch(userSketch) {
    socketRef.current.emit("send-sketch", userSketch);
  }
  function SendVote(userVote) {
    socketRef.current.emit("send-vote", userVote);
  }

  function ResetRound() {
    StartGame();
    setUserVotes([]);
    socketRef.current.emit("reset-round");
  }
  function ToResults() {
    socketRef.current.emit("to-results");
  }
  function ReadyPlayer() {
    socketRef.current.emit("ready-player");
  }
  return {
    players,
    StartGame,
    SendSketch,
    SendVote,
    ResetRound,
    ToResults,
    rounds,
    ReadyPlayer,
    readies,
    setReadies,
  };
};
export default useSocket;
