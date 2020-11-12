// Third libs
import React, { memo, useCallback } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useHistory } from 'react-router-dom';
import { FaCheckSquare, FaCommentAlt } from 'react-icons/fa';
import { HiArrowUp, HiArrowDown } from 'react-icons/hi';
// Local
import './style.scss';

const priorityColors = {
  1: '#23CC55',
  2: '#085820',
  3: '#E5762A',
  4: '#F7141C',
};

const borderColor = {
  'To do': '#FF4900',
  Working: '#8798ad',
  Done: '#0070ff',
};

const TaskCard = ({ id, name, state, index, visible, priority, type }) => {
  //Agregar parametro state que servira para saber a que columna pertenece
  const history = useHistory();
  const getStyle = dragStyle => ({
    display: !visible ? 'none' : '',
    borderLeftColor: borderColor[state],
    ...dragStyle,
  });

  let PriorityComponent;
  if (priority > 2) PriorityComponent = HiArrowUp;
  else PriorityComponent = HiArrowDown;

  return (
    <Draggable draggableId={name} key={name} index={index}>
      {provided => (
        <div
          className='task-card pointer'
          onClick={() => history.push(`/task-detail/${id}`)}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={getStyle(provided.draggableProps.style)}
        >
          <div className='task-card-top'>
            <h4>Issue Name</h4>
            <h4>{state}</h4>
          </div>
          <div className='task-card-bottom'>
            <p>
              {type === 'task' ? (
                <FaCheckSquare color='#20A2DA' />
              ) : (
                <FaCommentAlt color='#8BC34A' />
              )}
              <PriorityComponent color={priorityColors[priority]} />
            </p>
            <div className='task-card-user'>
              <p></p>
              <h6>MC-{id}</h6>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};
export default memo(TaskCard);
