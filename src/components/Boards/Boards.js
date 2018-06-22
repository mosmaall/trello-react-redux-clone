import React from 'react'
import Board from './Boards.board.js'

const Boards = ({ boards }) => {
  const boardItems = boards.map(b => <Board key={b.id} board={b} />)

  return <div>{boardItems}</div>
}

export default Boards
