import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./login.component.scss";

import FormGroup from "../FormGroup/FormGroup";
import Button from "../Button/Button";
import Alert from "../Alert/Alert";

import { login } from "../../redux/actions/users";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // if (isAuthenticated) {
  //   return <Redirect to="/contacts" />;
  // }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="login">
      <div className="container">
        <div className="margin-bottom-medium">
          <Alert />
          <h2 className="heading-secondary">
            Login and{" "}
            <span className="heading-secondary-mini">
              continue the awesomeness
            </span>
          </h2>
        </div>
        <form action="" className="register__form" onSubmit={handleSubmit}>
          <FormGroup name="email" type="email" handleChange={handleChange} />
          <FormGroup
            name="password"
            type="password"
            handleChange={handleChange}
          />
          <Button
            kind="button"
            type="submit"
            className="btn btn-primary"
            content="Login"
          />
          <Button
            kind="link"
            to="/register"
            className="btn btn-primary"
            content="Register"
          />
          {/* <span>Ready to join?</span> */}
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.users.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
