import React, { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';

import './style.scss';
import TaskCard from '../taskcard';

const ProjectColumn = ({ title, color, number, tasks = [] }) => {
  const [show, setShow] = useState(false);
  return (
    <div className='project-column'>
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
      <div className={`project-tasks-container ${show ? 'show-tasks' : ''}`}>
        {tasks.map((task, i) => (
          <TaskCard task={task} key={i} color={color} />
        ))}
      </div>
    </div>
  );
};

export default ProjectColumn;
