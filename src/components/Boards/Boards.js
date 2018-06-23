import React from 'react'
import Board from './Boards.board.container.js'

const Boards = ({ boards }) => {
  const boardItems = boards.map((b, idx) => (
    <Board key={b.id} board={b} index={idx} />
  ))

  return <div>{boardItems}</div>
}

export default Boards
