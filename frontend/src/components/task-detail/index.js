// Third libs
import React from "react";
import { BsFolder } from "react-icons/bs";
import { FaShareAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";

// Local
import "./style.scss";

// Components
import Avatar from "../avatar";

function TaskDetail() {
  const { id } = useParams();
  //use this id to get the data from the backend

  return (
    <main className="monkeys-p-5">
      <div className="d-flex">
        <span className="task-tag monkeys-text-flame">Task Tag</span>
        <span className="task-tag-bolder monkeys-text-midnight-blue monkeys-ml-2">
          Task Tag
        </span>
      </div>
      <div className="d-flex monkeys-mt-5 justify-content-between aling-items-center">
        <h1 className="task-name monkeys-text-dark-blue">
          Task Name {id}
        </h1>
        <div className="d-flex align-items-center">
          <FaShareAlt className="monkeys-text-gray pointer" />
          <div className="monkeys-p-1">
            <button className="task-detail-button d-flex align-items-center justify-content-center">
              <div
                className="monkeys-bg-secondary-blue position-absolute h-100 w-100 task-detail-button-op"
                style={{ zIndex: 1 }}
              />
              <span
                className="monkeys-text-special-blue position-absolute"
                style={{ zIndex: 2 }}
              >
                Done
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="d-flex monkeys-mt-3 justify-content-between h-100 w-100 task-detail-container">
        {/* TASK DETAIL ONE */}
        <div className="d-flex flex-column monkeys-bg-white shadow monkeys-p-3 task-detail-one">
          <span className="task-description monkeys-text-midnight-blue">
            Task Description
          </span>

          {/* TASK DETAIL CONTENT */}
          <div className="d-flex flex-column monkeys-mt-2">
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              maxime commodi tenetur quidem ipsum quia voluptatem perferendis
              in, sunt nesciunt officia molestiae delectus deserunt molestias
              quas assumenda corrupti omnis sit quam! Dolorem expedita quaerat
              cumque recusandae sunt perferendis doloribus maxime labore quidem
              similique, cupiditate quam ullam distinctio laudantium. Nobis
              culpa natus nulla repudiandae nisi odit atque aliquam delectus
              optio blanditiis, possimus excepturi eaque aut sit, ducimus
              accusamus voluptates, voluptatibus tenetur quidem provident! Ab
              tempore similique sint repellendus nulla velit fuga vitae numquam,
              nam sunt eum? Eveniet fuga similique aut doloremque suscipit at
              provident quod officiis iste! Alias dolore culpa eius?
            </div>
            <div className="monkeys-mt-3">
              <span className="monkeys-text-primary">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
                quibusdam harum sunt, aliquid maxime quod.
              </span>
            </div>
          </div>

          {/* TASK DETAIL FOOTER */}
          <div className="d-flex monkeys-mt-4 align-items-center user-select-none pointer">
            <BsFolder />
            <span className="monkeys-ml-2 monkeys-text-midnight-blue">
              assets
            </span>
          </div>
        </div>
        {/* TASK DETAIL TWO */}
        <div className="d-flex flex-column monkeys-bg-white shadow monkeys-p-3 task-detail-two">
          <span className="task-detail-two-header">In Charge</span>
          <div className="d-flex align-items-center monkeys-mt-2">
            <Avatar />
            <span className="task-detail-username monkeys-ml-1">
              User Name Last Name
            </span>
          </div>
          <span className="task-detail-two-header monkeys-mt-2">Reporter</span>
          <div className="d-flex align-items-center">
            <Avatar />
            <span className="task-detail-username monkeys-ml-1">
              User Name Last Name
            </span>
          </div>
          <span className="task-detail-two-header monkeys-mt-4">Task</span>
          <span className="task-tag monkeys-text-flame monkeys-mt-2">
            Task Tag
          </span>
          <span className="task-tag-bolder monkeys-text-midnight-blue monkeys-mt-2">
            Task Tag
          </span>
        </div>
      </div>
    </main>
  );
}

export default TaskDetail;
