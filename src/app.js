import React, { Component } from 'react'
import styled from 'styled-components'

import { TopHeader } from './header/top-header'
import { NavHeader } from './header/nav-header'
import { Roadmap } from './roadmap/roadmap'

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <TopHeader />
        <NavHeader />
        <Roadmap />
      </Container>
    )
  }
}

export default App
