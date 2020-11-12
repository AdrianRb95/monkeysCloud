import React, { memo } from "react";

// Components
import Planning from "../../components/planning";
import Issues from "../../components/issues";

function ProjectContainer(props) {
  switch (props.mode) {
    case "Issues":
      return <Issues />;
    case "Planning":
      return <Planning />;
    default:
      return null;
  }
}

export default memo(ProjectContainer);
