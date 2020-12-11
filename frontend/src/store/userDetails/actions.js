import { NotificationManager } from 'react-notifications';

import actions from './constants';
import axios from '../../api/axios';
import { UserDetailsStore } from './store';

export default function useActions() {
  const [state, dispatch] = UserDetailsStore.useUserDetails();

  const baseUrl = (action, id) => `user/${action}${id && '/' + id}`;

  const getData = async id => {
    try {
      const { data } = await axios.get(baseUrl('read', id));
      dispatch({
        type: actions.SET_USER,
        payload: data.user,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateUser = async values => {
    delete values.id;
    try {
      await axios.patch(baseUrl('update', state.user.id), values);
      NotificationManager.success('Profile updated successfully!');
    } catch (error) {
      console.log(error);
    }
  };

  const changePassword = async values => {
    delete values.confirmPassword;
    try {
      await axios.patch(baseUrl('changePassword', state.user.id), values);
      NotificationManager.success('Password changed successfully!');
    } catch (error) {
      NotificationManager.error('Server Error!');
    }
  };

  return {
    changePassword,
    getData,
    state,
    updateUser,
  };
}
