import React from 'react';

import './style.scss';

const EnviromentCard = ({ title }) => (
  <div className='enviroment-card'>
    <h3 className='github-title'>{title}</h3>
    <h4 className='github-data-history '>Code</h4>
    <h4 className='github-data-history '>Databases</h4>
    <h4 className='github-data-history '>Files</h4>
  </div>
);

export default EnviromentCard;
