import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./manage-tasks.component.scss";
import Button from "../Button/Button";
import Task from "../Task/Task";
import { getTasks } from "../../redux/actions/tasks";

const ManageTasks = ({ getTasks, userTasks }) => {
  useEffect(() => {
    getTasks();
  }, []);

  return (
    <section className="manage-tasks">
      <div className="container margin-top-big p-3">
        <div className="separate">
          <div className="text-left">
            <Button
              kind="link"
              to="/tasks"
              className="btn btn-small btn-secondary"
            >
              Back to tasks
            </Button>
          </div>
          <div className="text-left">
            <Button
              kind="link"
              to="/contacts"
              className="btn btn-small btn-secondary"
            >
              Go to contacts
            </Button>
          </div>
        </div>
        <div className="text-center margin-top-medium margin-bottom-medium">
          <h2 className="heading-secondary margin-bottom-small">
            Manage tasks
          </h2>
          <p className="paragraph-secondary">
            You can find all of your tasks here, edit them, delete them and also{" "}
            <Link to="/add-task">create a new one</Link>.
          </p>
          <p className="paragraph-secondary">
            Your tasks will automatically be deleted after you mark them as
            completed.
          </p>
        </div>
        <div className="tasks-content">
          {userTasks.length > 0 &&
            userTasks.map((task) => <Task key={task._id} task={task} />)}
        </div>
      </div>
    </section>
  );
};

ManageTasks.propTypes = {
  getTasks: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  userTasks: state.tasks.userTasks,
});

export default connect(mapStateToProps, { getTasks })(ManageTasks);
