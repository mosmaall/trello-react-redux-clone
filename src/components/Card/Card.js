import React from 'react'
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

  &:hover {
    opacity: 0.6;
  }
`

const Title = styled.p`
  padding: 0 10px;
`

const Card = ({ card }) => {
  return (
    <StyledCard>
      <Title>{card.title}</Title>
    </StyledCard>
  )
}

export default Card
