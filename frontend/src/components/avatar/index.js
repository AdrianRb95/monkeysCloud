// Third libs
import React, { memo } from "react";

// Local
import "./style.scss";
import useUserSettingsActions from "../../store/userSettings/actions";
import { useCallback } from 'react';
//components
import UserSettings from "../../components/userSettings";
function Avatar(props) {
  const {state: userSettingsState,toggleUserSettings} = useUserSettingsActions();
  //funciion para el evento Onclick
  const handleClick = useCallback(
    () => {
      toggleUserSettings();
    },
    [toggleUserSettings]
  );
  return (
    <div>
      {userSettingsState.isUserSettingsVisible && <UserSettings/> }
    <div className="avatar-icon-container"  onClick={handleClick}>
        <span className="avatar-icon"></span>
        <span className="avatar-status"></span>
    </div>
    </div>
  );
}

export default memo(Avatar);
