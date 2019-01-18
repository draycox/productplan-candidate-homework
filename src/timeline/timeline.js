import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-around !important;
  height: 56px;
  width: 98%;
  padding-left: 2vw;
  sans-serif;
  font-size: 14px;
`;

const TimeElement = styled.div`
  float: left;
  width: 4.7vw;
  color: #5E6266;
`;

const Text = styled.div``;

const TimeDot = styled.div`
  color: #C1C4C7;
`;

export class Timeline extends Component {
  timeline() {
    return ['2018', '', 'Q1 2019', '', '', 'Q2', '', '', 'Q3', '', '', 'Q4', '', '']
  }

  timeElement(string, index) {
    return (
      <TimeElement key={index}>
        <Text>{string}</Text>
        <TimeDot>•</TimeDot>
      </TimeElement>
    )
  }

  render() {
    return (
      <Container>
        { this.timeline().map((string,index) => this.timeElement(string, index)) }
      </Container>
    ) 
  }
}
