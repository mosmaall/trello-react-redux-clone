import React, { Component } from 'react'
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

const Title = styled.h3``

class Board extends Component {
  render() {
    const {
      connectDragPreview,
      connectDropTarget,
      connectDragSource,
    } = this.props
    const cardItems = this.props.board.cards.map((c, idx) => (
      <Card key={c.id} card={c} index={idx} />
    ))
    return connectDragPreview(
      connectDragSource(
        connectDropTarget(
          <div className="board-container">
            <StyledBoard>
              <Title>{this.props.board.title}</Title>
              {cardItems}
            </StyledBoard>
          </div>
        )
      )
    )
  }
}

export default Board
