import React from 'react';
import Avatar from '../../avatar';

import './style.scss';

const Comment = ({ comment: { date, name, message } }) => {
  return (
    <div className='taks-detail-comment'>
      <Avatar />
      <div className='comment-info'>
        <h5>
          {name} <span>{date}</span>
        </h5>
        <p>{message}</p>
        <div className='comment-options'>
          <button className='editable-buttons'>Edit</button>
          <button className='editable-buttons'>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
