import React from 'react';
import { useFormikContext } from 'formik';

import ErrorMessage from '../errorMessage';
import './style.scss';

const AppInput = ({ label, type = 'text', name, ...rest }) => {
  const { values, handleChange, errors, touched } = useFormikContext();
  return (
    <div className='form-group'>
      <label>{label}</label>
      <input
        value={values[name]}
        name={name}
        type={type}
        onChange={handleChange}
        className={errors[name] && touched[name] && 'danger'}
        {...rest}
      />
      {errors[name] && touched[name] && <ErrorMessage message={errors[name]} />}
    </div>
  );
};

export default AppInput;
