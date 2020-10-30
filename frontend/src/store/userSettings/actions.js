import {UserSettingsStore} from './store';

import actions from "./constants";

export default function useActions(){
const [state,dispatch] = UserSettingsStore.useUserSettings();
 function toggleUserSettings(){
 dispatch({
     type: actions.Toggle_User_Settings
 })
 }

 return{
     state,
     dispatch,
     toggleUserSettings
 }

}