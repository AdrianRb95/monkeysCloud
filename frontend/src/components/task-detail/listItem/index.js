import React from 'react';

import './style.scss';
import Avatar from '../../avatar';

const ListItem = ({ date, info, name, change, updated, editable = false }) => {
  return (
    <div className='d-flex align-items-center monkeys-mb-3'>
      <Avatar />
      <div className='item-info'>
        <p>
          <strong>{name}</strong> {info}{' '}
          <span className='monkeys-ml-2'>{date}</span>
        </p>
        {updated && (
          <p className='monkeys-mt-1'>
            <span>None </span> &rarr; {change}
          </p>
        )}
        {editable && (
          <div className='monkeys-mt-2'>
            <button className='editable-buttons'>Edit</button>
            <button className='editable-buttons'>Delete</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListItem;
