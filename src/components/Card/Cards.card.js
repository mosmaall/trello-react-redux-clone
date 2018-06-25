import React, { Component } from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 0 #ccc;
  cursor: pointer;
  display: block;
  margin-bottom: 8px;
  max-width: 300px;
  min-height: 20px;
  position: relative;
  text-decoration: none;
  z-index: 0;
  padding: 5px;

  &:hover {
    opacity: 0.6;
  }
`

const Title = styled.p`
  padding: 0 10px;
`

// const Card = ({ card }) => {
//   return (
//     <StyledCard>
//       <Title> {card.title} </Title>{' '}
//     </StyledCard>
//   )
// }

class Card extends Component {
  render() {
    const { connectDragSource, connectDropTarget } = this.props
    return connectDragSource(
      connectDropTarget(
        <div>
          <StyledCard>
            <Title> {this.props.card.title} </Title>
          </StyledCard>
        </div>
      )
    )
  }
}

export default Card
