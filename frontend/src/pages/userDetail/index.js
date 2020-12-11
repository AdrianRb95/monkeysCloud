import React, { memo, useEffect, useState } from 'react';
import * as Yup from 'yup';

import './style.scss';
import AppForm from '../../components/form/appForm';
import EditableInput from '../../components/form/editableInput';
import Avatar from './Avatar';
import Modal from './modal';
import options from './options';
import Spinner from '../../components/spinner';
import useUserDetail from '../../store/userDetails/actions';

const validationSchema = Yup.object().shape({});

const UserDetail = () => {
  const {
    state: { user, isLoading },
    getData,
    updateUser,
  } = useUserDetail();

  useEffect(() => {
    getData(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [openModal, setOpenModal] = useState(false);
  const onSubmit = async values => {
    await updateUser(values);
  };

  if (isLoading) return <Spinner height='500px' />;
  return (
    <>
      <Modal openModal={openModal} closeModal={() => setOpenModal(false)} />
      <div className='user-detail-page monkeys-p-5'>
        <div className='user-detail-page__container'>
          <div className='user-detail-page__header'>
            <h3>Profile and visibility</h3>
            <p>
              Manage your personal information, and control which information
              other people see and apps may access.
            </p>
            <a href='#' className='pointer'>
              Learn more about your profile
            </a>
            <div className='user-detail-page__avatar-container'>
              <h4>Profile photo and header image</h4>
              <div className='user-detail-page__avatar-container__img-container'>
                <Avatar />
              </div>
            </div>
          </div>
          <button
            className='change-password'
            onClick={() => setOpenModal(true)}
          >
            Change Password
          </button>
          <div className='user-detail-page__content'>
            <h4>About you</h4>
            <AppForm
              initialValues={user}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {options.map((item, i) => (
                <EditableInput {...item} key={i} />
              ))}
              <button type='submit'>Save Changes</button>
            </AppForm>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(UserDetail);
