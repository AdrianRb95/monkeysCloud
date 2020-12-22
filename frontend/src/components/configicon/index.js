//third Library
import React, { memo, useRef } from "react";
import { FaCog } from "react-icons/fa";
//local
import useSettingsActions from "../../store/settings/actions";
import { useCallback } from "react";
import { useIsOut } from "../../utils/customHooks/useIsOut";
//component
import MenuSettings from "../../components/menuSettings";
//style
import "./style.scss";

function Iconconfig(props) {
  const { state: SettingsState, toggleSettings } = useSettingsActions();
  const menuSettingsRef = useRef(null);
  useIsOut({ ref: menuSettingsRef, callback: toggleSettings });
  //funciion para el evento Onclick
  const handleClick = useCallback(() => {
    toggleSettings();
  }, [toggleSettings]);
  return (
    <div>
      {SettingsState.isSettingsVisible && <MenuSettings ref={menuSettingsRef} />}
      <FaCog onClick={handleClick} className="nav-icon-conf" />
    </div>
  );
}

export default memo(Iconconfig);
