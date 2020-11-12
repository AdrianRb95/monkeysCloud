import React, { memo } from "react";
import "./style.scss";

function MonkeyInput(props) {
  return (
    <input
      {...{
        ...props,
        className: props.hasOwnProperty("className")
          ? "monkeys-input ".concat(props.className)
          : "monkeys-input ",
      }}
    />
  );
}

export default memo(MonkeyInput);
