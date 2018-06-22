import React, { Component } from 'react'
import styled from 'styled-components'
import HeaderBar from '../../components/HeaderBar'
import Logo from '../../images/logo.png'
import { connect } from 'react-redux'

import Boards from '../../components/Boards'

const HomePageContainer = styled.div`
  margin-top: 100px;
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
    const { boards } = this.props

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)
