import React from "react";
import { Link } from "react-router-dom";
import "./button.component.scss";

const Button = ({ kind, content, ...otherProps }) => {
  return kind === "link" ? (
    <Link {...otherProps}>{content}</Link>
  ) : (
    <button {...otherProps}>{content}</button>
  );
};

export default Button;
