import React from 'react';
import './Game.css';
import Board from '../../components/Board/Board';

function Game() {
  return (
    <div className="gameStyles">
      Tic-Tac-Toe <br></br>
      <Board />
    </div>
  );
}

export default Game;
