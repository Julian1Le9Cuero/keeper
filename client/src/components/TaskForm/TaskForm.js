import React from "react";
// import PropTypes from 'prop-types'
import "./task-form.component.scss";
import Button from "../Button/Button";

const TaskForm = ({ history }) => {
  const closeForm = () => history.push("/tasks");

  return (
    <div className="form-overlay">
      <div className="form-modal">
        <span className="form-modal__close" onClick={closeForm}>
          &times;
        </span>
        <form className="task-form">
          <div className="task-form__group">
            <label htmlFor="title" className="task-form__group__label">
              Title*
            </label>
            <input
              name="title"
              type="text"
              id="title"
              //   value=""
              placeholder="Task Title"
              required
              className="task-form__group__input"
            />
          </div>
          <div className="task-form__group">
            <label htmlFor="text" className="task-form__group__label">
              Text (optional)
            </label>
            <textarea
              name="text"
              //   value=""
              id="text"
              cols="40"
              rows="15"
              className="task-form__group__text"
              placeholder="Add some text for the task"
            ></textarea>
          </div>
          <div className="task-form__group">
            <label htmlFor="level" className="task-form__group__label">
              Level of importance (optional)
            </label>
            <select name="level" id="level" className="task-form__group__level">
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
          {/* add Completed checkbox after task is created */}
        </form>
      </div>
    </div>
  );
};

// TaskForm.propTypes = {}

export default TaskForm;
