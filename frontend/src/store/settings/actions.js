import {SettingsStore} from './store';
import actions from "./constants";

export default function useActions(){
const [state,dispatch] = SettingsStore.useSettings();
 function toggleSettings(){
 dispatch({
     type: actions.Toggle_Settings
 })
 }

 return{
     state,
     dispatch,
     toggleSettings
 }

}