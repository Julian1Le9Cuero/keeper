import React from "react";
// import PropTypes from 'prop-types'
import "./tasks.component.scss";

import Button from "../Button/Button";

const Tasks = () => {
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

// Tasks.propTypes = {}

export default Tasks;
