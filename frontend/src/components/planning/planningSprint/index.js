import React, { Fragment, memo, useCallback, useState } from "react";

// Local
import { HiDotsHorizontal } from "react-icons/hi";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

// Components
import MonkeyAvatar from "../../monkeyAvatar";
import MonkeyButtonBase from "../../monkeyButtonBase";
import PlanningSprintIssue from "../planningSprintIssue";

// Style
import "./style.scss";

function PlanningSprint(props) {
  const [isSprintToggled, setIsSprintToggled] = useState(false);
  return (
    <div className="d-flex flex-column monkeys-p-3">
      <div className="d-flex align-items-center">
        <div
          className="monkeys-p-2 pointer d-flex align-items-center justify-content-center"
          onClick={() => setIsSprintToggled((prev) => !prev)}
        >
          {isSprintToggled ? <MdKeyboardArrowRight /> : <MdKeyboardArrowDown />}
        </div>
        <div className="monkeys-p-2">
          <span className="font-weight-bold">{props.sprint.name}</span>
        </div>
        <span className="monkeys-text-gray">
          {props.sprint.issues.length} issues
        </span>
      </div>

      {!isSprintToggled && (
        <Fragment>
          <div className="d-flex align-items-center monkeys-text-gray">
            <span className="monkeys-p-2">{props.sprint.start_date}</span>
            <span className="monkeys-p-2">~</span>
            <span className="monkeys-p-2">{props.sprint.end_date}</span>
          </div>

          <div className="d-flex align-items-center">
            {props.sprint.issues.slice(0, 5).map((issue) => (
              <MonkeyAvatar
                user={issue.assignee}
                key={`assignee-id-${issue.assignee.id}`}
              />
            ))}

            {props.sprint.issues.length - 4 > 0 && (
              <MonkeyAvatar color="#dfe1e6" className="font-size-12">
                + {props.sprint.issues.length - 4}
              </MonkeyAvatar>
            )}
            <div className="monkeys-p-2">
              <MonkeyButtonBase className="d-flex monkeys-p-2 align-items-center justify-content-center sprint-dot-options">
                <HiDotsHorizontal />
              </MonkeyButtonBase>
            </div>
          </div>

          <div className="d-flex align-items-center flex-column">
            {props.sprint.issues.map((issue) => (
              <PlanningSprintIssue
                issue={issue}
                key={`planning-sprint-issue-id-${issue.id}`}
              />
            ))}
          </div>
        </Fragment>
      )}
    </div>
  );
}

export default memo(PlanningSprint);
