import React from 'react';
import '../historial/style.scss';
import { FaCheck } from 'react-icons/fa';

function Historial() {
  return (
    <div className='Historial'>
      <div className='Rectangle'>
        <h1 className='titulo'>Test</h1>
        <p className='New-York-NY'>Activity</p>

        <button type='submit' className='base'>
          Clear
        </button>
      </div>

      <div className='Rectangle'>
        <div className='Application'>
          <p className='New-York-N'>DEPLOYED</p>
        </div>

        <span className='Oval'>
          <span className='Status'></span>
          <FaCheck className='Check' />
        </span>

        <div className='ApplicationExample'>
          <h3>Name</h3>
          <h3>Test</h3>
        </div>
        <p className='lastUpdate'>20 min ago</p>
      </div>
    </div>
  );
}

export default Historial;
