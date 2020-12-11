import React, { memo, useEffect, useRef, useState } from 'react';
import { useFormikContext } from 'formik';

import './style.scss';

const EditableInput = ({ name, label, textArea = false }) => {
  const { values, handleChange } = useFormikContext();
  const [edit, setEdit] = useState(false);
  const ref = useRef(null);
  const stopEditMode = ({ keyCode }) => {
    if (keyCode === 27 || keyCode === 13) setEdit(false);
  };

  const handleClick = e => {
    if (!ref.current?.contains(e.target)) setEdit(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const customProps = {
    name: name,
    value: values[name],
    onChange: handleChange,
    onKeyDown: stopEditMode,
    autoFocus: true,
  };

  return (
    <div className='editable-input'>
      <h6>{label || name}</h6>
      {!edit ? (
        <h5 onClick={() => setEdit(true)}>{values[name] || `Your ${label}`}</h5>
      ) : !textArea ? (
        <input {...customProps} />
      ) : (
        <textarea rows='3' {...customProps} />
      )}
    </div>
  );
};

export default memo(EditableInput);
