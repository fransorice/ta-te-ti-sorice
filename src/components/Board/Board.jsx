import React from 'react';
import Square from '../Square/Square';
import './Board.css';

const Board = ({squares, onClick, turn, winningSquares}) => {

    const createSquare = values => (
        values.map(value => (
            <Square
              winner={winningSquares.includes(value)}
              turn={turn}
              onClick={() => onClick(value)}
              value={squares[value]}
              key={`square_${value}`}
            />
        ))
      );

  return (
    <>
      <div className="wrapper">
        <svg>
          <text x="50%" y="50%" dy=".35em" text-anchor="middle">
            Tic-Tac-Toe
          </text>
        </svg>
      </div>
    <div className='board'>
      <div className='row'>
        {createSquare([0,1,2])}
      </div>
      <div className='row'>
        {createSquare([3,4,5])}
      </div>
      <div className='row'>
        {createSquare([6,7,8])}
      </div>
    </div>
    </>
  )
}

export default Board;
