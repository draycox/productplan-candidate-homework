import React, { Component } from 'react'
import styled from 'styled-components'

import { Draggable } from 'react-beautiful-dnd'
import Image from '../assets/images/expand2.png'

const Button = styled.div`
  width: 100%
  display: flex;
  align-items: center;
  height: 36px;
  background: #E4E6E8;
  border-radius: 4px;
  margin-top: 9px;
  font-size: 14px;
  text-indent: 20px;
  white-space: nowrap;
  & i {
  }
`;

const Icon = styled.img`
  margin-left: 1vw;
`;

export class Option extends Component {
  render = () => (
    <Draggable 
      draggableId={this.props.id} 
      index={this.props.index}
      isDragDisabled={this.props.id === 'option-2'}
    >
      {(provided, snapshot)=>(
        <Button
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Icon src={Image}></Icon>
          <span>{this.props.title}</span>
        </Button>
      )}
    </Draggable>
  )
}
