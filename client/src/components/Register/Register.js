import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./register.component.scss";

import FormGroup from "../FormGroup/FormGroup";
import Button from "../Button/Button";
import Alert from "../Alert/Alert";
import { register } from "../../redux/actions/users";
import { createAlert } from "../../redux/actions/alert";

const Register = ({ register, isAuthenticated, createAlert }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  if (isAuthenticated) {
    return <Redirect to="/tasks" />;
  }

  const { name, email, password, password2 } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send alert if passwords don't match
    if (password !== password2) {
      return createAlert("Passwords must match", "danger");
    }

    register(formData);
  };

  return (
    <div className="register">
      <div className="container">
        <div className="margin-bottom-medium">
          <Alert />
          <h2 className="heading-secondary">
            Register to{" "}
            <span className="heading-secondary-mini">
              make your life easier
            </span>
          </h2>
        </div>
        <form action="" className="register__form" onSubmit={handleSubmit}>
          <FormGroup
            name="name"
            type="text"
            handleChange={handleChange}
            value={name}
          />
          <FormGroup
            name="email"
            type="email"
            handleChange={handleChange}
            value={email}
          />
          <FormGroup
            name="password"
            type="password"
            handleChange={handleChange}
            value={password}
          />
          <FormGroup
            name="password2"
            type="password"
            handleChange={handleChange}
            value={password2}
          />
          <Button kind="button" type="submit" className="btn btn-primary">
            Register
          </Button>
          <Button kind="link" to="/login" className="btn btn-primary">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

Register.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  register: PropTypes.func.isRequired,
  createAlert: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.users.isAuthenticated,
});

export default connect(mapStateToProps, { register, createAlert })(Register);
