import React, { Component } from 'react'
import styled from 'styled-components'
import HeaderBar from '../../components/HeaderBar'
import Logo from '../../images/logo.png'

const HomePageContainer = styled.div``

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
    return (
      <HomePageContainer>
        <StyledHeader>
          <StyledLogo src={Logo} />
        </StyledHeader>
      </HomePageContainer>
    )
  }
}

export default HomePage
