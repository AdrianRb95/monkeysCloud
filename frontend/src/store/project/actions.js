import { NotificationManager } from 'react-notifications';

import actions from './constants';
import axios from '../../api/axios';
import { ProjectStore } from './store';

export default function useActions() {
  const [state, dispatch] = ProjectStore.useProjects();
  const baseUrl = action => `project/${action}`;

  const createProject = async project => {
    try {
      //await axios.post(baseUrl('create'), project);
      NotificationManager.success('Project created successfully!');
    } catch (error) {
      console.log(error);
    }
  };

  return {
    createProject,
    state,
  };
}
