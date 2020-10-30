import React from 'react';

import './style.scss';

const Select = ({ options = [], value, className }) => {
  return (
    <select value={value} className={className}>
      {options.map((o, i) => (
        <option key={i}>{o}</option>
      ))}
    </select>
  );
};

export default Select;
