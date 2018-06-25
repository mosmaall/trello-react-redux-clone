import React from 'react'
import Card from './Cards.card.container.js'

const Cards = ({ cards }) => {
  const cardItem = cards.map((c, idx) => (
    <Card key={c.id} card={c} index={idx} />
  ))

  return <div>{cardItem}</div>
}

export default Cards
