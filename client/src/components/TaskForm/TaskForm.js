import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./task-form.component.scss";
import Button from "../Button/Button";
import Alert from "../Alert/Alert";
import { addTask, clearTask } from "../../redux/actions/tasks";
import { createAlert } from "../../redux/actions/alert";

const TaskForm = ({ history, addTask, clearTask, createAlert }) => {
  useEffect(() => {
    return () => {
      clearTask();
    };
  });
  const [taskData, setTaskData] = useState({
    title: "",
    text: "",
    level: "normal",
  });
  const [numCharacters, setNumCharacters] = useState(0);

  const closeForm = () => history.push("/manage-tasks");
  // Clear task after component mounts and load task after user wants to edit one
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "text") {
      setNumCharacters(value.length);
    }

    setTaskData({ ...taskData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (numCharacters > 300) {
      return createAlert("The text exceeds 300 characters", "danger");
    }
    setNumCharacters(0);
    addTask(taskData, history);
    setTaskData({
      title: "",
      text: "",
      level: "",
    });
  };

  const { title, text } = taskData;

  return (
    <div className="form-overlay">
      <div className="form-modal">
        <Alert />
        <span className="form-modal__close" onClick={closeForm}>
          &times;
        </span>
        <form className="task-form" onSubmit={handleSubmit}>
          <div className="task-form__group">
            <label htmlFor="title" className="task-form__group__label">
              Title*
            </label>
            <input
              name="title"
              type="text"
              id="title"
              className="task-form__group__input"
              placeholder="Task Title"
              value={title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="task-form__group">
            <label htmlFor="text" className="task-form__group__label">
              Text (optional) - Number of characters: {numCharacters}
            </label>
            <textarea
              name="text"
              id="text"
              className="task-form__group__text"
              cols="40"
              rows="15"
              placeholder="Add some text for the task (300 characters maximum)"
              value={text}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="task-form__group">
            <label htmlFor="level" className="task-form__group__label">
              Level of importance (optional)
            </label>
            <select
              name="level"
              id="level"
              className="task-form__group__level"
              onChange={handleChange}
            >
              <option defaultValue value="normal">
                Normal
              </option>
              <option value="important">Important</option>
              <option value="urgent">Life or Death</option>
            </select>
          </div>
          <div className="text-right">
            <Button
              kind="link"
              to="/tasks"
              className="btn btn-small btn-danger "
            >
              Close
            </Button>
            <Button
              kind="button"
              type="submit"
              className="btn btn-small btn-success"
            >
              Create task
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
  clearTask: PropTypes.func.isRequired,
  createAlert: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  task: state.tasks.task,
});

export default connect(mapStateToProps, { addTask, clearTask, createAlert })(
  TaskForm
);
