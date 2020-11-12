import React, { memo } from "react";
import "./style.scss";

function MonkeyButtonBase(props) {
  return (
    <button
      {...{
        ...props,
        className: "monkeys-button-base ".concat(props.className || ""),
      }}
    >
      {props.children}
    </button>
  );
}

export default memo(MonkeyButtonBase);
