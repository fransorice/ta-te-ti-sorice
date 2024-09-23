import React from 'react'

const Board = ({square}) => {

    const createSquare = (values) => {
        values.map((value) => {
            <div>{value}</div>
        })
    };

  return (
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
  )
}

export default Board
