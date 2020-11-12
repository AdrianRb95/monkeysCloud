import React, { memo, useCallback } from "react";
import "./style.scss";
import Color from "color";
import MonkeyAvatar from "../../monkeyAvatar";
import { FaArrowAltCircleUp } from "react-icons/fa";

// Local
import useSprintActions from "../../../store/sprint/actions";

function PlanningSprintIssue(props) {
  const { state: sprintState, setVal } = useSprintActions();
  const colorVariants = {
    low: "blue",
    medium: "orange",
    hight: "red",
  };

  const handleClick = useCallback((e) => {
    switch (e.currentTarget.dataset.el_name) {
      case "btnSelectIssue":
        setVal({
          key: "selectedIssue",
          value: JSON.parse(e.currentTarget.dataset.el_value),
        });
        break;
      default:
        break;
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div
      className="issue-root"
      onClick={handleClick}
      data-el_name="btnSelectIssue"
      data-el_value={JSON.stringify(props.issue)}
    >
      <div
        className="issue-row"
        style={{
          borderLeft: `3px solid ${props.issue.epic_color}`,
          background:
            sprintState.selectedIssue.id === props.issue.id ? "#deebff" : null,
        }}
      >
        <div className="monkeys-p-2 d-flex align-items-center">
          <div className="monkeys-p-2">
            <input
              type="checkbox"
              name="issue-checkbox"
              id="issue-checkbox-id"
            />
          </div>
          <p className="monkeys-p-2 text-truncate" title={props.issue.title}>
            {props.issue.title || "(UNTITLED)"}
          </p>
          <div className="monkeys-p-2">
            <div
              className="monkeys-p-2 epic-badge"
              style={{
                background: props.issue.epic_color,
                color:
                  Color(props.issue.epic_color).luminosity() >= 0.5
                    ? "black"
                    : "white",
              }}
            >
              <p className="text-truncate" title={props.issue.epic_link}>
                {props.issue.epic_link}
              </p>
            </div>
          </div>
        </div>
        <div className="monkeys-p-2 d-flex align-items-center">
          <div className="monkeys-p-2">
            <MonkeyAvatar
              user={props.issue.assignee}
              key={`issue-assignee-id-${props.issue.assignee.id}`}
            />
          </div>
          <div
            className="monkeys-p-2"
            style={{
              textDecorationLine:
                props.issue.status === "done" ? "line-through" : "none",
            }}
          >
            {props.issue.name}
          </div>
          <div className="monkeys-p-2">
            <FaArrowAltCircleUp
              title={
                props.issue.priority[0].toUpperCase() +
                props.issue.priority.slice(1, props.issue.priority.length)
              }
              color={colorVariants[props.issue.priority]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(PlanningSprintIssue);
