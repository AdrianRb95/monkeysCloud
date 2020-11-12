import React, { memo, useCallback, useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { DragDropContext } from 'react-beautiful-dnd';

import './style.scss';
import BreadCrumb from '../../components/breadcrumb';
import ProjectColumn from '../../components/projectcolumn';
import TaskCard from '../../components/taskcard';
import tasks from './tasks';

const userCollection = [
  { id: 1, value: 'Oscar Melendez' },
  { id: 2, value: 'Eduardo Alvarez' },
  { id: 3, value: 'Carlos Gutierrez' },
  { id: 4, value: 'Alejandro Melendez' },
];

const actions = [
  'Issues',
  'Planning',
  'Boards',
  'Labels',
  'Service Desk',
  'Reports',
];

const Project = () => {
  const [columns, setColumns] = useState({
    'To do': {
      color: '#FF4900',
      number: 76,
      id: 1,
      tasks: tasks.filter(i => i.state === 'To do'),
    },
    Working: {
      color: '#8798ad',
      number: 69,
      id: 2,
      tasks: tasks.filter(i => i.state === 'Working'),
    },
    Done: {
      color: '#0070ff',
      number: 28,
      id: 3,
      tasks: tasks.filter(i => i.state === 'Done'),
    },
  });
  const [selectedUser, setSelectedUser] = useState('');
  const [mode, setMode] = useState('Issues');

  const onDragEnd = ({ destination, source }) => {
    if (!destination) return;
    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    ) {
      return;
    }

    // Creating a copy of item before removing it from state
    const itemCopy = { ...columns[source.droppableId].tasks[source.index] };
    itemCopy.state = destination.droppableId;
    setColumns(prev => {
      prev = { ...prev };
      // Remove from previous items array
      prev[source.droppableId].tasks.splice(source.index, 1);
      // Adding to new items array location
      prev[destination.droppableId].tasks.splice(
        destination.index,
        0,
        itemCopy
      );
      return prev;
    });
  };

  const setVisible = useCallback(
    assignee => {
      if (selectedUser) {
        if (selectedUser === assignee) return true;
        else return false;
      }
      if (!selectedUser) return true;
    },
    [selectedUser]
  );

  return (
    <div className='manage-page monkeys-p-5'>
      <div className='project-header'>
        <BreadCrumb />
        <div className='monkeys-p-1'>
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
        {/*
          ---------------------------user fields---------------------------------
        */}
        <div className='user-filter'>
          <ul>
            {userCollection.map(({ id, value }, i) => (
              <li key={i}>
                <UserIcon
                  id={id}
                  value={value}
                  onClick={() => setSelectedUser(id)}
                  style={selectedUser === id ? 'selected-user' : ''}
                />
              </li>
            ))}
            <li
              className='li-clear pointer'
              onClick={() => setSelectedUser('')}
            >
              clear all
            </li>
          </ul>
        </div>
        {/*
            ---------------------------end user fields--------------------------------
        */}
        <div className='project-action-buttons'>
          <button>Complete Sprint</button>
          <button>Edit Boards</button>
          <button className='ction-button-special'>Share</button>
        </div>
      </div>
      <div className='project-tasks'>
        <DragDropContext onDragEnd={onDragEnd}>
          {Object.keys(columns).map((i, index) => (
            <ProjectColumn title={i} {...columns[i]} key={index}>
              {columns[i].tasks.map((task, i) => (
                <TaskCard
                  {...task}
                  key={i}
                  index={i}
                  visible={setVisible(task.assignee)}
                />
              ))}
            </ProjectColumn>
          ))}
        </DragDropContext>
      </div>
    </div>
  );
};

const UserIcon = ({ id, value, onClick, style }) => {
  return (
    <div className={'icon-container ' + style} onClick={onClick}>
      <input id={id} type='checkbox' value={value} />
      <FaUserAlt className='user-icon-center' />
    </div>
  );
};

export default memo(Project);
