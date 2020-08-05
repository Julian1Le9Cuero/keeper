import React from "react";
// import PropTypes from "prop-types";
import Button from "../Button/Button";
import "./register.component.scss";

const Register = () => {
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
        <form action="" className="register__form" autocomplete="off">
          <div className="form__group">
            <input
              id="name"
              type="text"
              placeholder="Name"
              className="form__group__input"
              required
            />
            <label htmlFor="name" className="form__group__label">
              Name
            </label>
          </div>
          <div className="form__group">
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="form__group__input"
              required
            />
            <label htmlFor="email" className="form__group__label">
              Email
            </label>
          </div>
          <div className="form__group">
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="form__group__input"
              required
            />
            <label htmlFor="password" className="form__group__label">
              Password
            </label>
          </div>
          <div className="form__group">
            <input
              id="password2"
              type="password"
              placeholder="Confirm Password"
              className="form__group__input"
              required
            />
            <label htmlFor="password2" className="form__group__label">
              Confirm Password
            </label>
          </div>
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
