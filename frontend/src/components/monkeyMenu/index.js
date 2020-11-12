import React, { memo } from "react";
import "./style.scss";

function MonkeyMenu(props) {
  return (
    <ul
      {...{
        ...props,
        className: "monkeys-menu shadow ".concat(props.className || ""),
      }}
    >
      {props.children}
    </ul>
  );
}

export default memo(MonkeyMenu);
