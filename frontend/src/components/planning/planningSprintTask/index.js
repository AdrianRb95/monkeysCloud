import React, { memo, useMemo, Fragment, useCallback, useState } from "react";
import { FaEye, FaShareAlt, FaTimes, FaLink, FaCheck } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { GrAttachment, GrTask } from "react-icons/gr";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
// Local
import "./style.scss";
import useSprintActions from "../../../store/sprint/actions";

// Components
import MonkeyButtonBase from "../../monkeyButtonBase";
import MonkeyInput from "../../monkeyInput";
import MonkeyMenu from "../../monkeyMenu";
import MonkeyMenuItem from "../../monkeyMenuItem";

function PlanningSprintTask(props) {
  const [isStatusMenuOpen, setIsStatusMenuOpen] = useState(false);
  const { state: sprintState, setVal } = useSprintActions();
  const handleClick = useCallback((e) => {
    switch (e.currentTarget.dataset.el_name) {
      case "btnShowWatchers":
        break;
      case "btnChangeStatus":
        setIsStatusMenuOpen((prev) => !prev);
        break;
      case "btnCloseTask":
        setVal("selectedIssue", {
          id: "",
          sprint_id: "",
          name: "",
          status: "",
          title: "",
          description: "",
          attachments: [],
          comments: [],
          assignee: {
            id: "",
            first_name: "",
            last_name: "",
            image: null,
            color: "",
          },
          reporter: {
            id: "",
            first_name: "",
            last_name: "",
            image: null,
            color: "",
          },
          development: "",
          labels: [],
          original_estimate: 0,
          time_tracking: "",
          priority: "",
          components: [],
          fix_versions: [],
          epic_link: "",
          epic_color: "",
          completed_sprints: [],
          watchers: [],
        });
        break;
      default:
        break;
    }
    // eslint-disable-next-line
  }, []);
  const currentSprint = useMemo(() => {
    return sprintState.sprints.find(
      (sprint) => sprint.id === sprintState.selectedIssue.sprint_id
    );
  }, [sprintState.sprints, sprintState.selectedIssue.sprint_id]);
  return (
    <Fragment>
      <div className="d-flex align-items-center">
        <div className="d-flex align-items-center monkeys-p-2">
          <p className="text-truncate-sm font-size-12">{currentSprint.name}</p>
          <span>/</span>
          <p className="text-truncate-sm font-size-12">
            {sprintState.selectedIssue.name}
          </p>
        </div>
        <div className="d-flex align-items-center monkeys-p-2">
          <MonkeyButtonBase
            data-el_name="btnShowWatchers"
            onClick={handleClick}
            className="d-flex monkeys-p-2 align-items-center justify-content-center overriding-monkeys-button-base"
          >
            <FaEye height={16} width={16} />
            <div className="monkeys-p-2">
              {sprintState.selectedIssue.watchers.length}
            </div>
          </MonkeyButtonBase>
        </div>
        <div className="d-flex align-items-center monkeys-p-2">
          <MonkeyButtonBase
            data-el_name="btnShare"
            onClick={handleClick}
            className="d-flex monkeys-p-2 align-items-center justify-content-center overriding-monkeys-button-base"
          >
            <FaShareAlt height={16} width={16} />
          </MonkeyButtonBase>
        </div>
        <div className="d-flex align-items-center monkeys-p-2">
          <MonkeyButtonBase
            data-el_name="btnActions"
            onClick={handleClick}
            className="d-flex monkeys-p-2 align-items-center justify-content-center overriding-monkeys-button-base"
          >
            <BsThreeDots height={16} width={16} />
          </MonkeyButtonBase>
        </div>
        <div className="d-flex align-items-center monkeys-p-2">
          <MonkeyButtonBase
            data-el_name="btnCloseTask"
            onClick={handleClick}
            className="d-flex monkeys-p-2 align-items-center justify-content-center overriding-monkeys-button-base"
          >
            <FaTimes height={16} width={16} />
          </MonkeyButtonBase>
        </div>
      </div>
      <div className="d-flex align-items-center monkeys-p-2">
        <MonkeyInput
          className="overriding-input-task"
          value={sprintState.selectedIssue.title}
        />
      </div>
      <div className="d-flex align-items-center monkeys-p-2">
        <div className="d-flex align-items-center monkeys-p-2">
          <MonkeyButtonBase
            title="Add new attachment"
            data-el_name="btnAddAttachment"
            onClick={handleClick}
            className="d-flex monkeys-p-2 align-items-center justify-content-center overriding-monkeys-button-base"
          >
            <GrAttachment height={16} width={16} />
          </MonkeyButtonBase>
        </div>
        <div className="d-flex align-items-center monkeys-p-2">
          <MonkeyButtonBase
            title="Add new subtask"
            data-el_name="btnAddSubTask"
            onClick={handleClick}
            className="d-flex monkeys-p-2 align-items-center justify-content-center overriding-monkeys-button-base"
          >
            <GrTask height={16} width={16} />
          </MonkeyButtonBase>
        </div>
        <div className="d-flex align-items-center monkeys-p-2">
          <MonkeyButtonBase
            title="Add new link, web pages and more"
            data-el_name="btnAddLink"
            onClick={handleClick}
            className="d-flex monkeys-p-2 align-items-center justify-content-center overriding-monkeys-button-base"
          >
            <FaLink height={16} width={16} />
          </MonkeyButtonBase>
        </div>
      </div>
      <div className="d-flex align-items-center monkeys-p-2">
        <div className="position-relative d-flex align-items-center">
          <MonkeyButtonBase
            className="d-flex monkeys-p-2 overriding-button-status"
            data-el_name="btnChangeStatus"
            onClick={handleClick}
          >
            {sprintState.selectedIssue.status}
            {isStatusMenuOpen ? (
              <MdKeyboardArrowUp color="white" />
            ) : (
              <MdKeyboardArrowDown color="white" />
            )}
          </MonkeyButtonBase>
          {isStatusMenuOpen && (
            <MonkeyMenu className="overriding-monkey-menu">
              <MonkeyMenuItem>Done</MonkeyMenuItem>
              <MonkeyMenuItem>Working</MonkeyMenuItem>
              <MonkeyMenuItem>Todo</MonkeyMenuItem>
            </MonkeyMenu>
          )}
        </div>
        {sprintState.selectedIssue.status === "done" && (
          <div className="d-flex align-items-center">
            <div className="monkeys-p-2 d-flex align-items-center justify-content-center">
              <FaCheck color="green" width={16} height={16} />
            </div>
            <small className="monkeys-text-gray">
              {sprintState.selectedIssue.status}
            </small>
          </div>
        )}
      </div>
      <div className="d-flex  monkeys-p-2 flex-column">
        <div className="font-weight-bold">Description</div>
        <MonkeyInput
          className="overriding-input-task"
          value={sprintState.selectedIssue.description}
        />
      </div>
    </Fragment>
  );
}

export default memo(PlanningSprintTask);
