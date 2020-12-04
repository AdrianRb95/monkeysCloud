import React from 'react';

import './style.scss';

const Spinner = ({ height }) => (
  <div className='spinner-container' style={{ height }}>
    <div className='sk-chase'>
      <div className='sk-chase-dot'></div>
      <div className='sk-chase-dot'></div>
      <div className='sk-chase-dot'></div>
      <div className='sk-chase-dot'></div>
      <div className='sk-chase-dot'></div>
      <div className='sk-chase-dot'></div>
    </div>
  </div>
);

export default Spinner;