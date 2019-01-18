import React, { Component } from 'react'
import styled from 'styled-components'
import { DragDropContext } from 'react-beautiful-dnd'

import initialData from '../initial-data'
import { Timeline } from '../timeline/timeline'
import { OptionsList } from '../options-list/options-list';
import { LanesList } from './lanes-list';

const Container = styled.div`
  width: 87.8vw;
`;

const SideNav = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  right: 0;
  top: 130px;
  height: 100%;
  width: 12vw
  background-color: white;
  z-index: 1;
`;

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};


// a little function to help us with reordering the result


export class Roadmap extends Component {
  
  state = initialData;
  
  onDragStart = (result) => {
    // console.log(result)
  }

  onDragUpdate = (result) => {
    // console.log(result)
  }

  onDragEnd = result => {
    const { source, destination } = result;
    
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    const startArea = this.state.areas[source.droppableId]
    const finishArea = this.state.areas[destination.droppableId]

    if (startArea === finishArea){

      const toUpdate = {
        'optionIds': startArea.optionIds,
        'laneIds': startArea.laneIds,
      }

      const ids = source.droppableId === 'options-list' ? 'optionIds' : 'laneIds' 
      const reOrderedIds = reorder(toUpdate[ids], source.index, destination.index)
    
      const newArea = {
        ...startArea,
        [ids]: reOrderedIds
      }

      const newState = {
        ...this.state,
        areas: {
          ...this.state.areas,
          [newArea.id]: newArea
        },
      };

      this.setState(newState)
    }else{
      const finishAreaClone = Array.from(finishArea.laneIds);
      const newLane = {id: `Lane-${finishArea.laneIds.length + 1}`, title: `Lane`}
      
      finishAreaClone.splice(destination.index, 0, newLane.id);
      
      const newArea = {
        ...finishArea,
        laneIds: finishAreaClone
      }
      
      const newState = {
        ...this.state,
        lanes: {
          ...this.state.lanes,
          [newLane.id]: newLane 
        },
        areas: {
          ...this.state.areas,
          [newArea.id]: newArea
        },
      };
      this.setState(newState)
    }
    
};

  render = () => (
    <Container>
      <Timeline />
      <DragDropContext
        onDragStart={this.onDragStart}
        onDragUpdate={this.onDragUpdate}
        onDragEnd={this.onDragEnd}
      >
        <LanesList ids={this.state.areas['lanes-list'].laneIds} lanes={this.state.lanes}/>
        <SideNav>
          <OptionsList ids={this.state.areas['options-list'].optionIds} options={this.state.options}/>
        </SideNav>
      </DragDropContext>
    </Container>
  )
}   
