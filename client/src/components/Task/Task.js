import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./task.component.scss";
import { findTask, deleteTask } from "../../redux/actions/tasks";

const Task = ({ findTask, deleteTask, task, history }) => {
  const { _id, title, level, text, updatedAt } = task;

  let lastUpdate = Date.now() - new Date(updatedAt);
  lastUpdate = new Date(lastUpdate).getMinutes();

  const [completed, setCompleted] = useState(false);

  const handleComplete = (_id) => {
    setCompleted(true);
    deleteTask(_id);
  };

  return (
    <div className={`task task-${level}`}>
      <div className="task__header separate">
        <h5 className={`task__title ${completed && "completed"}`}>{title}</h5>
        <div className="task__icons">
          {!completed && (
            <i
              className="fas fa-marker task__icons-1"
              onClick={() => findTask(_id, history)}
            ></i>
          )}{" "}
          <i
            className="fas fa-trash task__icons-2"
            onClick={() => deleteTask(_id)}
          ></i>
        </div>
      </div>
      <div className="task__description">
        {text && (
          <p className={`task__description__text ${completed && "completed"}`}>
            {text}
          </p>
        )}
        {!completed && (
          <small className="task__description__update">
            Last update:{" "}
            {lastUpdate < 60 ? `${lastUpdate} mins` : "more than an hour"} ago
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
          onChange={() => handleComplete(_id)}
        />{" "}
        <label htmlFor="completed" className="task__completed__label">
          Mark as {completed ? "uncompleted" : "completed"}
        </label>
      </div>
    </div>
  );
};

Task.propTypes = {
  findTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  task: PropTypes.object.isRequired,
};

export default connect(null, { findTask, deleteTask })(withRouter(Task));
