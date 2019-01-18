import React, { Component } from 'react'
import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'

import { Option } from './option'
import initialData from '../initial-data';

const List = styled.div`
  width: 100%;
  margin: 4%;
  height: 50%;
`;

export class OptionsList extends Component {
  render = () => (
    <List>
      <Droppable droppableId={"options-list"}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
          {this.props.ids.map((optionId, index) => {
            const option = this.props.options[optionId];
            return <Option key={option.id} id={option.id} index={index} title={option.title}/>
          })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </List>
  )
}
