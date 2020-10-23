import React, { useState } from 'react';
import { FaFolder } from 'react-icons/fa';

import './style.scss';
import Activitycontainer from '../../components/activitycontainer';
import BreadCrumb from "../../components/breadcrumb";

const AllEnviroment = () => {
  const [mode, setMode] = useState('Issues');
  const actions = ['Overview', 'Issues', 'Pull Request'];
  const table = [
    { name: 'assets', commit: 'MM/DD/YYYY', update: '22 days ago' },
    { name: 'assets', commit: 'MM/DD/YYYY', update: '22 days ago' },
    { name: 'assets', commit: 'MM/DD/YYYY', update: '22 days ago' },
  ];

  return (
    <div className='detail-enviroment-page monkeys-p-5'>
      <div className='project-header'>
        <div className='project-name'>
          <BreadCrumb />
        </div>
        <span className='project-type'>Public</span>
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
      <div className='project-action-buttons'>
        <button>Settings</button>
        <button>Wiki</button>
        <button className='action-button-special'>Clon</button>
      </div>
      <Activitycontainer title='Free | Drupal' />
      <Activitycontainer title='Gitflow' />
      <div className='enviroment-table-container'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>last commit</th>
              <th>last update</th>
            </tr>
          </thead>
          <tbody>
            {table.map(({ name, update, commit }, i) => (
              <tr key={i}>
                <td>
                  <p>
                    <FaFolder className='table-icon' /> {name}
                  </p>
                </td>
                <td>{update}</td>
                <td>{commit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllEnviroment;
