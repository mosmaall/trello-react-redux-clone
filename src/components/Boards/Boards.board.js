import React from 'react'
import Card from '../../components/Card'
import styled from 'styled-components'

const BoardContainer = styled.div`
  width: 272px;
  margin: 0 4px;
  height: 100%;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  white-space: nowrap;
`

const StyledBoard = styled.div`
  padding: 12px;
  background: #e2e4e6;
  border-radius: 3px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-height: 100%;
  position: relative;
  white-space: normal;
`

const Board = ({ board }) => {
  const cardItems = board.cards.map(c => <Card key={c.id} card={c} />)
  return (
    <BoardContainer>
      <StyledBoard>
        <p>{board.title}</p>
        {cardItems}
      </StyledBoard>
    </BoardContainer>
  )
}

export default Board
