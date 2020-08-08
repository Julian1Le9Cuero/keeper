import React, { useState } from "react";
// import PropTypes from 'prop-types'
import "./task.component.scss";

const Task = () => {
  const [completed, setCompleted] = useState(false);

  const handleComplete = (_id) => {
    setCompleted(true);
    //  Dispatch action to update as completed and delete after 10mins
  };
  return (
    <div className="task task-urgent">
      <div className="task__header separate">
        <h5 className={`task__title ${completed && "completed"}`}>
          Clean bedroom Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Temporibus laborum provident molestiae enim odit maxime vero
          corrupti sunt doloremque consequatur?
        </h5>
        <div className="task__icons">
          {!completed && <i className="fas fa-marker task__icons-1"></i>}{" "}
          <i className="fas fa-trash task__icons-2"></i>
        </div>
      </div>
      <div className="task__description">
        <p className={`task__description__text ${completed && "completed"}`}>
          Organize books, shoes, bed and move trash
        </p>
        {!completed && (
          <small className="task__description__update">
            Last update: 2 mins ago
          </small>
        )}
      </div>
      {/* Disable after marked as completed*/}
      <div className="task__completed">
        <input
          type="checkbox"
          name="completed"
          id="completed"
          checked={completed}
          disabled={completed}
          onChange={handleComplete}
        />{" "}
        <label htmlFor="completed" className="task__completed__label">
          Mark as {completed ? "uncompleted" : "completed"}
        </label>
      </div>
    </div>
  );
};

// Task.propTypes = {}

export default Task;
