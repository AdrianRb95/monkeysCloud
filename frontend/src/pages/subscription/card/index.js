import React, { memo } from 'react';

import './style.scss';

const Card = ({ Icon, type, price, options, dark, onClick }) => (
  <div
    className='card-plan'
    style={{ background: dark ? '#242424' : '#276afb' }}
  >
    <div className='card-plan-img-container'>
      <Icon />
    </div>
    <div className='card-plan-info'>
      <h4 className='card-plan-type'>{type}</h4>
      <h2 className='card-plan-price'>${price}</h2>
      <span>per month</span>
    </div>
    <div className='card-plan-options'>
      {options.map((o, i) => (
        <p key={i}>{o}</p>
      ))}
    </div>
    <div className='card-plan-button'>
      <button
        style={{ background: !dark ? '#242424' : '#276afb' }}
        onClick={onClick}
      >
        Choose Plan
      </button>
    </div>
  </div>
);

export default memo(Card);
