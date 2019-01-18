import React, { Component } from 'react'
import styled from 'styled-components'
import logo from '../assets/svgs/logo.svg'
import search from '../assets/svgs/search.svg'

const Container = styled.header`
  display: flex;
  height: 48px;
  border-bottom: 1px solid #C1C4C7;
  background-color: white;
`;

const Logo = styled.span`
  display: flex;
  justify-content: center;
  min-width: 150px;
  border-right: 1px solid #C1C4C7;

  img {
    height: auto;
  }
`;

const Title = styled.span`
  display: flex;
  align-items: center;
  padding-left: 12px;
  sans-serif;
  font-size: 16px;
  white-space: nowrap;
`;

const Search = styled.span`
  display: flex;
  margin-left: auto;
  padding-right: 14px;
`;


export class TopHeader extends Component {
  render() {
    return (
      <Container>
        <Logo>
          <img src={logo} alt='logo' />
        </Logo>
        <Title>
          Candidate Roadmap
        </Title>
        <Search>
          <img src={search} alt='search' />
        </Search>
      </Container>
    )
  }
}
