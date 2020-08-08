import React from "react";
import { Link } from "react-router-dom";
import "./manage-tasks.component.scss";
import Button from "../Button/Button";
import Task from "../Task/Task";

const ManageTasks = () => {
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
          <Task />
          <Task />
        </div>
      </div>
    </section>
  );
};

export default ManageTasks;
