import React from 'react';
import './style.scss';

const Button = ({ title, ...rest }) => (
  <button className='form-button' type='submit' {...rest}>
    {title}
  </button>
);

export default Button;
