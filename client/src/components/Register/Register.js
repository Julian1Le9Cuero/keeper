import React from "react";
// import PropTypes from "prop-types";
import FormGroup from "../FormGroup/FormGroup";
import Button from "../Button/Button";
import "./register.component.scss";

const Register = () => {
  const handleChange = (e) => {
    console.log(e);
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
        <form action="" className="register__form">
          <FormGroup name="name" type="text" handleChange={handleChange} />
          <FormGroup name="email" type="email" handleChange={handleChange} />
          <FormGroup
            name="password"
            type="password"
            handleChange={handleChange}
          />
          <FormGroup
            name="password2"
            type="password"
            handleChange={handleChange}
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

// Register.propTypes = {};

export default Register;
