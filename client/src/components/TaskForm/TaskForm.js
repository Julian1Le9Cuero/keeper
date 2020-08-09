import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./task-form.component.scss";

import Button from "../Button/Button";
import Alert from "../Alert/Alert";

import { addTask, updateTask, clearTask } from "../../redux/actions/tasks";
import { createAlert } from "../../redux/actions/alert";

class TaskForm extends React.Component {
  constructor() {
    super();
    this.state = {
      taskData: {
        title: "",
        text: "",
        level: "normal",
      },
      numCharacters: 0,
    };
  }

  componentDidMount() {
    let taskFields = {};
    const { task } = this.props;

    if (task) {
      for (const field in task) {
        if (field in this.state.taskData) {
          taskFields[field] = task[field];
        }
      }
      // Load task if user wants to update one
      this.setState({
        taskData: taskFields,
        numCharacters: taskFields.text.length,
      });
    }
  }

  componentWillUnmount() {
    this.props.clearTask();
  }

  render() {
    const { addTask, updateTask, createAlert, task, history } = this.props;

    const closeForm = () => history.push("/manage-tasks");
    const { taskData, numCharacters } = this.state;

    const handleChange = (e) => {
      const { name, value } = e.target;

      if (name === "text") {
        this.setState({ numCharacters: value.length });
      }

      this.setState({ taskData: { ...taskData, [name]: value } });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      // Check that text does not exceed the allowed
      if (numCharacters > 300) {
        return createAlert("The text exceeds 300 characters", "danger");
      }

      if (task) {
        updateTask(task._id, taskData, history);
      } else {
        addTask(taskData, history);
      }

      // Reset form
      this.setState({
        taskData: {
          title: "",
          text: "",
          level: "",
        },
        numCharacters: 0,
      });
    };

    const { title, text, level } = taskData;

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
                value={level}
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
                {task ? "Update" : "Create"} task
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

TaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  clearTask: PropTypes.func.isRequired,
  createAlert: PropTypes.func.isRequired,
  task: PropTypes.object,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  task: state.tasks.task,
});

export default connect(mapStateToProps, {
  addTask,
  createAlert,
  clearTask,
  updateTask,
})(TaskForm);
