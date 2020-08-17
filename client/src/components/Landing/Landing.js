import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./landing.component.scss";

import Button from "../Button/Button";

const Landing = ({ isAuthenticated, loading }) => {
  if (isAuthenticated && !loading) {
    return <Redirect to="/manage-contacts" />;
  }

  return (
    <header className="header">
      <div className="container">
        <div className="landing">
          <div className="landing__heading">
            <h1 className="heading-primary">Keeper Manager</h1>
            <div className="primary-paragraphs">
              <p className="paragraph-primary">
                Manage your tasks and contacts like never before, our user
                friendly interface allows you to easily manage your priorities.
              </p>
              <br />
              <p className="paragraph-primary">
                Too many things to do? No worries! Create as many tasks and
                contacts as you want, we handle everything for you.
              </p>
              <br />
              <p className="paragraph-primary">
                We really care about ease of use. Access your duties easily, we
                take all of the heavy lifting.
              </p>
            </div>
            <Button
              kind="link"
              to="/register"
              className="btn btn-primary btn-inverted"
            >
              Create an account
            </Button>
          </div>
          <div className="landing__images">
            <img src="/img/main1.jpg" alt="Tasks" className="heading__image" />
            <img
              src="/img/main2.jpg"
              alt="People Meeting"
              className="heading__image"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.users.isAuthenticated,
  loading: state.users.loading,
});

export default connect(mapStateToProps)(Landing);
