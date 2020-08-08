import React from "react";
import { Link } from "react-router-dom";
import "./button.component.scss";

const Button = ({ kind, children, ...otherProps }) => {
  return kind === "link" ? (
    <Link {...otherProps}>{children}</Link>
  ) : (
    <button {...otherProps}>{children}</button>
  );
};

export default Button;
