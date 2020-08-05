import React from "react";
// import PropTypes from "prop-types";
import FormGroup from "../FormGroup/FormGroup";
import Button from "../Button/Button";
import "./login.component.scss";

const Login = () => {
  const handleChange = (e) => {
    console.log(e);
  };

  return (
    <div className="login">
      <div className="container">
        <div className="margin-bottom-medium">
          <h2 className="heading-secondary">
            Login and{" "}
            <span className="heading-secondary-mini">
              continue the awesomeness
            </span>
          </h2>
        </div>
        <form action="" className="register__form" autocomplete="off">
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
            to="/login"
            className="btn btn-primary"
            content="Register"
          />
          {/* <span>Ready to join?</span> */}
        </form>
      </div>
    </div>
  );
};

// Login.propTypes = {};

export default Login;
