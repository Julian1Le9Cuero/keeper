import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./task-form.component.scss";
import Button from "../Button/Button";
import { addTask, clearTask } from "../../redux/actions/tasks";

const TaskForm = ({ history, addTask, clearTask }) => {
  useEffect(() => {
    return () => {
      clearTask();
    };
  });
  const [formData, setFormData] = useState({
    title: "",
    text: "",
    level: "",
  });

  const closeForm = () => history.push("/tasks");
  // Clear task after component mounts and load task after user wants to edit one
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addTask(formData);
    setFormData({
      title: "",
      text: "",
      level: "",
    });
  };

  const { title, text } = formData;

  return (
    <div className="form-overlay">
      <div className="form-modal">
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
              Text (optional)
            </label>
            <textarea
              name="text"
              id="text"
              className="task-form__group__text"
              cols="40"
              rows="15"
              placeholder="Add some text for the task"
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
};

const mapStateToProps = (state) => ({
  task: state.tasks.task,
});

export default connect(mapStateToProps, { addTask, clearTask })(TaskForm);
