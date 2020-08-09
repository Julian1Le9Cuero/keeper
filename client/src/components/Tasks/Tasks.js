import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./tasks.component.scss";

import Button from "../Button/Button";

const Tasks = ({ user, userTasks }) => {
  // Check if user has any task or has just added some
  if (user.tasks.length > 0 && userTasks.length > 0) {
    return <Redirect to="/manage-tasks" />;
  }

  return (
    <section className="tasks">
      <div className="container">
        <h2 className="heading-secondary margin-bottom-medium">
          What's <span className="heading-secondary-mini">new?</span>
        </h2>
        <div className="tasks__content">
          <img src="/img/todos.jpg" alt="Task" className="tasks__img" />
          <div className="tasks__content__text">
            <p className="tasks__content__text__paragraph">
              Looks like you haven't added your first task, please create one
              here.
            </p>
            <div className="tasks__content__text__button margin-top-medium">
              <Button kind="link" to="add-task" className="btn btn-secondary">
                Add first task
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Tasks.propTypes = {
  user: PropTypes.object.isRequired,
  userTasks: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.users.user,
  userTasks: state.tasks.userTasks,
});

export default connect(mapStateToProps)(Tasks);
