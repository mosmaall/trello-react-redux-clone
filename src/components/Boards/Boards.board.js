import React, { Component } from 'react'
import Cards from '../Card'
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

    return connectDragPreview(
      connectDragSource(
        connectDropTarget(
          <div className="board-container">
            <StyledBoard>
              <Title>{this.props.board.title}</Title>
              <Cards cards={this.props.board.cards} />
            </StyledBoard>
          </div>
        )
      )
    )
  }
}

export default Board
