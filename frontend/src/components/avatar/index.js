// Third libs
import React, { memo } from "react";

// Local
import "./style.scss";

function Avatar(props) {
  return (
    <div className="avatar-icon-container">
        <span className="avatar-icon"></span>
        <span className="avatar-status"></span>
    </div>
  );
}

export default memo(Avatar);
