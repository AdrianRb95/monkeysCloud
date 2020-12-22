import React, { memo } from 'react';
import * as Yup from 'yup';

import './style.scss';
import AppForm from '../../components/form/appForm';
import AppInput from '../../components/form/appInput';
import AppButton from '../../components/form/button';
import useProjects from '../../store/project/actions';

const CreateProject = () => {
  const { createProject } = useProjects();
  const onSubmit = async values => await createProject(values);
  return (
    <div className='create-project monkeys-p-5'>
      <div className='create-project__main'>
        <h2>Create Project</h2>
        <AppForm
          initialValues={initialState}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {options.map((o, i) => (
            <AppInput key={i} {...o} />
          ))}
          <div className='create-project__button-container'>
            <AppButton title='Create' />
          </div>
        </AppForm>
      </div>
    </div>
  );
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  key: Yup.string().required().label('Key'),
});

const initialState = {
  name: '',
  key: '',
};
const options = [
  {
    name: 'name',
    label: 'Name',
  },
  {
    name: 'key',
    label: 'Key',
  },
];

export default memo(CreateProject);
