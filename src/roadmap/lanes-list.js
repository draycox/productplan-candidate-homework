import React, { Component } from 'react'
import styled from 'styled-components'
import { Droppable, Draggable } from 'react-beautiful-dnd'

import { Lane } from './lane'

const Container = styled.div`
  width: 100%;
  height: ${props => (props.isDraggingOver ? '25vh' : '100vh')};
  display: flex;
  margin-left: ${props => (props.isDraggingOver ? '5vh' : '' )}
  margin-top: 4vh;
  transition: backgroud-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'white' : '' )}
  border: ${props => (props.isDraggingOver ? '2px dashed #5E6266' : '')}
  cursor: ${props => (props.isDraggingOver ? 'move': '')}
`;

const Lanes = styled.div`
  width: 100vw;
`;

export class LanesList extends Component {
  render = () => (
    <Droppable droppableId={"lanes-list"}>
      {(provided, snapshot) => (
        <Container
          ref={provided.innerRef}
          {...provided.droppableProps}
          isDraggingOver={snapshot.isDraggingOver}
        >
        <Lanes>
          <Draggable draggableId={"1"} index={0}>
            {(provided, snapshot)=>(
              <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
              {this.props.ids.map((laneId, index) => {
                const lane = this.props.lanes[laneId];
                if (!lane) {
                  return;
                }else {
                  return <Lane key={lane.id} id={lane.id} index={index} title={lane.title}/>
                }
              })}
              </div>
            )}
          </Draggable>
          {provided.placeholder}
        </Lanes>
        </Container>
      )}
    </Droppable>
  )
}


