import React, { memo, useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { Droppable } from 'react-beautiful-dnd';

import './style.scss';

const ProjectColumn = ({ title, color, number, children }) => {
  const [show, setShow] = useState(false);
  return (
    <Droppable droppableId={title}>
      {provided => (
        <div
          className='project-column'
          {...provided.droppableProps}
          key={title}
          ref={provided.innerRef}
        >
          <div className='project-column-header'>
            <h5 className='title'>
              {title}
              <span className='badge-counter' style={{ color }}>
                {number}
              </span>
            </h5>
            <div className='accordion-icon-container'>
              <FaCaretDown
                className='accordion-icon'
                onClick={() => setShow(!show)}
              />
            </div>
          </div>
          <ul className={`project-tasks-container ${show ? 'show-tasks' : ''}`}>
            {children}
          </ul>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};
export default memo(ProjectColumn);
