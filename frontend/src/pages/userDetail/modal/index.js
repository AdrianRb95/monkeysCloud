import React, { memo, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Modal from 'react-modal';
import * as Yup from 'yup';

import './style.scss';
import AppForm from '../../../components/form/appForm';
import AppInput from '../../../components/form/appInput';
import useUserDetail from '../../../store/userDetails/actions';

const customStyles = {
  content: {
    border: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    background: 'transparent',
  },
};

const initialState = {
  currentPassword: '',
  password: '',
  confirmPassword: '',
};

const validationSchema = Yup.object().shape({
  currentPassword: Yup.string().required().label('Current Password'),
  password: Yup.string().required().label('Password'),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref('password'), null], "Passwords don't match")
    .label('Confirm Password'),
});

const CustomModal = ({ openModal = false, closeModal }) => {
  const { changePassword } = useUserDetail();
  const onSubmit = async values => {
    closeModal();
    await changePassword(values);
  };

  useEffect(() => {
    Modal.setAppElement('body');
  }, []);

  return (
    <Modal
      onRequestClose={closeModal}
      isOpen={openModal}
      style={customStyles}
      ariaHideApp={false}
    >
      <div className='user-detail-page-modal'>
        <div className='top pdd-base'>
          <h4>Security</h4>
          <AiOutlineClose className='pointer' onClick={closeModal} />
        </div>
        <div className='user-detail-page-modal__content'>
          <AppForm
            initialValues={initialState}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {options.map((o, i) => (
              <AppInput {...o} key={i} type='password' />
            ))}
            <button type='submit'>Save Changes</button>
          </AppForm>
        </div>
      </div>
    </Modal>
  );
};

const options = [
  {
    name: 'currentPassword',
    label: 'Current Password',
    placeholder: 'Enter your current password',
  },
  {
    name: 'password',
    label: 'New Password',
    placeholder: 'Enter your new password',
  },
  {
    name: 'confirmPassword',
    label: 'Confirm Password',
    placeholder: 'Confirm Password',
  },
];

export default memo(CustomModal);
