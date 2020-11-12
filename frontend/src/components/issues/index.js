import React, { memo, useEffect } from "react";

// Styles
import "./style.scss";

// Local
import useTaskActions from "../../store/task/actions";

// Components
import ProjectColumn from "../../components/projectcolumn";
import UserList from "../../components/userList";

function Issues(props) {
  const { loadTasks } = useTaskActions();

  useEffect(() => {
    loadTasks();
    // eslint-disable-next-line
  }, []);

  const columns = [
    { target: "todo", title: "To do", color: "#FF4900", number: 76 },
    { target: "working", title: "Working", color: "#8798ad", number: 69 },
    { target: "done", title: "done", color: "#0070ff", number: 28 },
  ];

  return (
    <>
      <div className="project-action-container">
        <div className="project-mode-name">
          <h3>Issues</h3>
          <UserList />
        </div>
        <div className="project-action-buttons">
          <button>Complete Sprint</button>
          <button>Edit Boards</button>
          <button className="ction-button-special">Share</button>
        </div>
      </div>
      <div className="project-tasks">
        {columns.map(({ title, target, number, color }, i) => (
          <ProjectColumn {...{ title, target, number, color }} key={i} />
        ))}
      </div>
    </>
  );
}

export default memo(Issues);
