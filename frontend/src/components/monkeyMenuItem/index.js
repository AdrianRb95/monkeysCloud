import React, { memo } from "react";
import "./style.scss";

function MonkeyMenuItem(props) {
  return (
    <li
      {...{
        ...props,
        className: "monkeys-menu-item ".concat(props.className || ""),
      }}
    >
      {props.children}
    </li>
  );
}

export default memo(MonkeyMenuItem);
