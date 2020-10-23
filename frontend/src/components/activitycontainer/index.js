import React, { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';

import './style.scss';
import Card from '../enviromentcard';

const ActivityContainer = ({ title, tasks = [] }) => {
  const [show, setShow] = useState(false);
  return (
    <div className='enviroment-activity-container'>
      <div className='enviroment-activity-header'>
        <h4 className='enviroment-activity-title'>{title}</h4>
        <div className='accordion-icon-container'>
          <FaCaretDown
            className='accordion-icon'
            onClick={() => setShow(prev => !prev)}
          />
        </div>
      </div>
      <div className={`enviroment-card-container ${show ? 'show-tasks' : ''}`}>
        <Card title='Development URL' />
        <Card title='Development URL' />
        <Card title='Development URL' />
        <Card title='Development URL' />
      </div>
    </div>
  );
};

export default ActivityContainer;
