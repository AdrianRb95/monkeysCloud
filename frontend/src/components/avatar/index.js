// Third libs
import React, { memo, useRef } from "react";

// Local
import "./style.scss";
import useUserSettingsActions from "../../store/userSettings/actions";
import { useCallback } from "react";
import { useIsOut } from "../../utils/customHooks/useIsOut";

//components
import UserSettings from "../../components/userSettings";
function Avatar(props) {
  const {
    state: userSettingsState,
    toggleUserSettings,
  } = useUserSettingsActions();
  const userSettingsRef = useRef(null);
  useIsOut({ ref: userSettingsRef, callback: toggleUserSettings });
  //funciion para el evento Onclick
  const handleClick = useCallback(() => {
    toggleUserSettings();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      {userSettingsState.isUserSettingsVisible && (
        <UserSettings ref={userSettingsRef} />
      )}
      <div className="avatar-icon-container" onClick={handleClick}>
        <span className="avatar-icon"></span>
        <span className="avatar-status"></span>
      </div>
    </div>
  );
}

export default memo(Avatar);
