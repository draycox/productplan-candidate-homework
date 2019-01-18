import React, { Component } from 'react'
import styled from 'styled-components'
import { Droppable, Draggable } from 'react-beautiful-dnd'

const Container = styled.div`
`;

const Row = styled.div`
  font-family: Gilroy;
  font-size: 16px;
  border-radius: 3px 0px 0px 3px;
  width: 98%;
  padding-left: 2vw;
  margin-top: 10px;
}
`;

const RowHeading = styled.div`
  display: flex;
  color: white;
  border-radius: 3px 0px 0px 0px;
  height: 30px;
  background-color: #EF6031;
  cursor: pointer;
  align-items: center;
  padding: 5px 0 5px 10px;

  & i {
    margin-right: 12px;
  }
`;

const RowBody = styled.div`
  height: 50px;  
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row
  justify-content: space-around !important;
  background-color: white;
  top: 0;
  left: 0;
`;

const Unit = styled.div`
  height: 50px;
  width: 4.7vw;
`;

const Line = styled.div`
  height: 100%;
  border-left: 1px solid #e0e4e7;
`;

export class Lane extends Component {
  render = () => (
    <Draggable draggableId={this.props.id} index={this.props.index}>
      {(provided, snapshot)=>(
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragDisabled={this}
        >
          <Row>
            <RowHeading>
              <span><i className="fas fa-caret-down"></i>{this.props.title}</span>
            </RowHeading>
            <RowBody>
              <Unit>
                <Line></Line>
              </Unit>
              <Unit>
                <Line ></Line>
              </Unit>
              <Unit>
                <Line ></Line>
              </Unit>
              <Unit>
                <Line ></Line>
              </Unit>
              <Unit>
                <Line ></Line>
              </Unit>
              <Unit>
                <Line ></Line>
              </Unit>
              <Unit>
                <Line ></Line>
              </Unit>
              <Unit>
                <Line ></Line>
              </Unit>
              <Unit>
                <Line ></Line>
              </Unit>
              <Unit>
                <Line ></Line>
              </Unit>
              <Unit>
                <Line ></Line>
              </Unit>
              <Unit>
                <Line ></Line>
              </Unit>
              <Unit>
                <Line ></Line>
              </Unit>
              <Unit>
                <Line ></Line>
              </Unit>
            </RowBody>
          </Row>
        </Container>
      )}
    </Draggable>
  )
}
