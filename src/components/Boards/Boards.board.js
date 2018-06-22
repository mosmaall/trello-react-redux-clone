import React from 'react'
import Card from '../../components/Card'

const Board = ({ board }) => {
  const cardItems = board.cards.map(c => <Card key={c.id} card={c} />)
  return (
    <div>
      <p>{board.title}</p>
      {cardItems}
    </div>
  )
}

export default Board
