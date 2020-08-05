import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import FormGroup from "../FormGroup/FormGroup";
import Button from "../Button/Button";
import "./register.component.scss";

import { register } from "../../redux/actions/users";

const Register = ({ register, isAuthenticated }) => {
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
      return "Alert";
    }

    register(formData);
  };

  return (
    <div className="register">
      <div className="container">
        <div className="margin-bottom-medium">
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
          <Button
            kind="button"
            type="submit"
            className="btn btn-primary"
            content="Register"
          />
          <Button
            kind="link"
            to="/login"
            className="btn btn-primary"
            content="Login"
          />
          {/* <span>Already a member?</span> */}
        </form>
      </div>
    </div>
  );
};

Register.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.users.isAuthenticated,
});

export default connect(mapStateToProps, { register })(Register);
