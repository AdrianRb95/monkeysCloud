import React, { useEffect } from 'react';
import Modal from 'react-modal';
import * as Yup from 'yup';

import './style.scss';
import AppForm from '../../form/appForm';
import Select from '../select';

const customStyles = {
  content: {
    border: 'none',
    width: '95%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
};

const initialState = {
  name: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
});

const CustomModal = ({ openModal = false, closeModal }) => {
  useEffect(() => {
    Modal.setAppElement('body');
  }, []);
  const options = ['Monkeys cloud', 'monkeys front-end'];
  const onSubmit = () => {};
  return (
    <Modal
      onRequestClose={closeModal}
      isOpen={openModal}
      style={customStyles}
      ariaHideApp={false}
    >
      <div className='modal-content'>
        <AppForm
          initialValues={initialState}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <h3>Create Branch</h3>
          <div className='modal-form-group'>
            <label>Repository</label>
            <Select options={options} className='select-create-branch' />
          </div>
          <div className='modal-form-group'>
            <label>From branch</label>
            <Select options={options} className='select-create-branch' />
          </div>
          <div className='modal-form-group'>
            <label>Branch Name</label>
            <input placeholder='Branch name...' />
          </div>
          <div className='modal-buttons'>
            <button>Create</button> <button onClick={closeModal}>Cancel</button>
          </div>
        </AppForm>
      </div>
    </Modal>
  );
};

export default CustomModal;
