import React, { useState, useEffect } from "react";
import { Gamepad2Icon, User, UserCheck, Bot, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TicTacToe = () => {
  const [gameMode, setGameMode] = useState(null);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);
  const navigate = useNavigate();

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (board[index] || winner || isDraw) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);

    const gameWinner = calculateWinner(newBoard);
    setWinner(gameWinner);
    setIsXNext(!isXNext);

    if (!gameWinner && newBoard.every((square) => square !== null)) {
      setIsDraw(true);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
    setIsDraw(false);
  };

  const botMove = () => {
    if (winner || isXNext || isDraw) return;

    const availableSpots = board
      .map((val, index) => (val === null ? index : null))
      .filter((val) => val !== null);

    if (availableSpots.length === 0) return;

    const randomIndex = Math.floor(Math.random() * availableSpots.length);
    handleClick(availableSpots[randomIndex]);
  };

  useEffect(() => {
    if (gameMode === "bot" && !isXNext && !winner && !isDraw) {
      setTimeout(botMove, 500);
    }
  }, [board, isXNext, gameMode, winner, isDraw]);

  return (
    <div className="w-full h-full flex flex-col items-center p-5">
      {gameMode === null ? (
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Choose Game Mode</h2>
          <div className="flex gap-5">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center gap-2"
              onClick={() => setGameMode("bot")}
            >
              <Bot className="w-5 h-5" /> Play Against Bot
            </button>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 flex items-center gap-2"
              onClick={() => setGameMode("2players")}
            >
              <UserCheck className="w-5 h-5" /> Play 2 Players
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <button
            onClick={() => navigate("/")}
            className="flex h-full items-center justify-center text-red-500 mb-4"
          >
            <ArrowLeft className="mr-2" /> Retour
          </button>

          <h3 className="text-2xl font-bold mb-4">
            {winner
              ? `Winner: ${winner}`
              : isDraw
              ? "It's a Draw!"
              : `Next Player: ${isXNext ? "X" : "O"}`}
          </h3>
          
          <div className="grid grid-cols-3 gap-2 w-64">
            {board.map((value, index) => (
              <div
                key={index}
                className="w-20 h-20 bg-gray-100 text-center flex items-center justify-center text-3xl font-bold cursor-pointer hover:bg-gray-200"
                onClick={() => {
                  if (gameMode === "bot" && !isXNext) return;

                  handleClick(index);
                }}
              >
                {value}
              </div>
            ))}
          </div>

          <button
            onClick={resetGame}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Reset Game
          </button>
        </div>
      )}
    </div>
  );
};

export default TicTacToe;
