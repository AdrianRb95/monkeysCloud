import React, { useState } from 'react';

import './style.scss';
import ProjectColumn from '../../components/projectcolumn';
import BreadCrumb from "../../components/breadcrumb";

const Project = () => {
  const [mode, setMode] = useState('Issues');
  const actions = [
    'Issues',
    'Planning',
    'Boards',
    'Labels',
    'Service Desk',
    'Reports',
  ];

  const tasks = [
    {id: 1, name: 'Tag', date: 'MM/DD/YY' },
    {id: 2, name: 'Tag', date: 'MM/DD/YY' },
    {id: 3, name: 'Tag', date: 'MM/DD/YY' },
  ];

  const columns = [
    { title: 'To do', color: '#FF4900', number: 76 },
    { title: 'Working', color: '#8798ad', number: 69 },
    { title: 'done', color: '#0070ff', number: 28 },
  ];

  return (
    <div className='manage-page monkeys-p-5'>
      <div className='project-header'>
        <BreadCrumb />
        <div className="monkeys-p-1">
          <span className='project-type'>Public</span>
        </div>
        <div className='project-enviroment-buttons'>
          <button className='env-button'>All Enviroment</button>
          <button className='env-button env-active'>Dev Enviroment</button>
        </div>
      </div>
      <div className='project-filter-container'>
        {actions.map((action, i) => (
          <button
            key={i}
            onClick={() => setMode(action)}
            className={`project-filter-button ${
              action === mode ? 'filter-active' : ''
            } `}
          >
            {action}
          </button>
        ))}
      </div>
      <div className='project-action-container'>
        <div className='project-mode-name'>
          <h3>Issues</h3>
        </div>
        <div className='project-action-buttons'>
          <button>Complete Sprint</button>
          <button>Edit Boards</button>
          <button className='ction-button-special'>Share</button>
        </div>
      </div>
      <div className='project-tasks'>
        {columns.map(({ title, number, color }, i) => (
          <ProjectColumn
            title={title}
            number={number}
            color={color}
            key={i}
            tasks={tasks}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
