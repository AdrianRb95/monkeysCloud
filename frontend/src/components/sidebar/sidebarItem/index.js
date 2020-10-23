import React, { memo, useCallback } from "react";

import "./style.scss";
import { useLocation, useHistory } from "react-router-dom";

function SidebarItemNavigation(props) {
  const location = useLocation();
  const history = useHistory();

  const handleClick = useCallback(() => {
    history.push(props.pathname);
  }, [history, props.pathname]);

  return (
    <div onClick={handleClick} className="monkeys-menu-item">
      {props.children}
      {props.pathname === location.pathname && (
        <div className="monkeys-line-blue" />
      )}
      {props.pathname === location.pathname && (
        <div className="monkeys-background" />
      )}
    </div>
  );
}

function SidebarItemSimple(props) {
  return <div className="monkeys-menu-item">{props.children}</div>;
}

function SidebarItem(props) {
  return props.pathname ? (
    <SidebarItemNavigation {...props} />
  ) : (
    <SidebarItemSimple {...props} />
  );
}

export default memo(SidebarItem);
