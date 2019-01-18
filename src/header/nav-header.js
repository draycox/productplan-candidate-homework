import React, { Component } from 'react'
import styled from 'styled-components'

const Header = styled.header`
  display: flex;
  height: 80px;
  border-bottom: 1px solid #C1C4C7;
  background-color: white;
`;

const Title = styled.span`
  display: flex;
  align-items: flex-end;
  font-family: GilroyBold, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
  sans-serif;
  font-weight: bold;
  font-size: 32px;
  padding: 0 0 12px 30px;
  white-space: nowrap;
`;

const Nav = styled.nav`
  display: flex;
  align-items: flex-end;
  margin-left: 40vw;
  padding-right: 12vw;
  font-size: 16px;
  color:  #5E6266;
`;

const Tab = styled.span`
  white-space: nowrap;
  padding: 8px 12px;
  
  &.active {
    border-bottom: 4px solid #1973BA;
    margin-bottom: -4px;
  }
`;


export class NavHeader extends Component {
  render() {
    return (
      <Header>
        <Title>
          Product roadmap
        </Title>
        <Nav>
          <Tab className='active'>
            Roadmap
          </Tab>
          <Tab>
            Planning board
          </Tab>
          <Tab>
            Parking lot
          </Tab>
        </Nav>
      </Header>
    )
  }
}
