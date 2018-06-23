import React, { Component } from 'react'
import styled from 'styled-components'
import HeaderBar from '../../components/HeaderBar'
import Logo from '../../images/logo.png'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import { connect } from 'react-redux'

import Boards from '../../components/Boards'

const HomePageContainer = styled.div`
  margin-top: 100px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  white-space: nowrap;
  margin-bottom: 8px;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 8px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

const StyledHeader = styled(HeaderBar)`
  && {
    background: white;
  }
`

const StyledLogo = styled.img`
  display: block;
  margin: 0 auto;
  width: 100px;
`

class HomePage extends Component {
  render() {
    console.log('now props =', this.props)
    const { boards } = this.props
    console.log('boards', boards)
    return (
      <HomePageContainer>
        <StyledHeader>
          <StyledLogo src={Logo} />
        </StyledHeader>
        <Boards boards={boards} />
      </HomePageContainer>
    )
  }
}

const mapStateToProps = state => ({
  boards: state.boards.board,
})

const mapDispatchToProps = dispatch => ({})

export default DragDropContext(HTML5Backend)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomePage)
)
