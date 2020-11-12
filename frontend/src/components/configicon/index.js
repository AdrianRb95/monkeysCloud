//third Library
import React, { memo } from "react";
import {FaCog} from 'react-icons/fa';
//local
import useSettingsActions from "../../store/settings/actions";
import { useCallback } from 'react';
//component
import MenuSettings from "../../components/menuSettings";
//style
import "./style.scss"

function Iconconfig(props){
    const {state: SettingsState,toggleSettings} = useSettingsActions();
    //funciion para el evento Onclick
    const handleClick = useCallback(
    () => {
      toggleSettings();
    },
    [toggleSettings]
    );
    return(
        <div>
            {SettingsState.isSettingsVisible && <MenuSettings/> }
        <FaCog onClick={handleClick} className="nav-icon-conf"/>
    </div>
    );
    
}

export default  memo(Iconconfig);