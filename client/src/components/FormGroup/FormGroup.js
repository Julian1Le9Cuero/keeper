import React from "react";
import "./form-group.component.scss";

const FormGroup = ({ name, handleChange, ...otherProps }) => {
  let nameCapitalized;

  switch (name) {
    case "password2":
      nameCapitalized = "Confirm Password";
      break;
    default:
      nameCapitalized = name[0].toUpperCase() + name.substring(1, name.length);
      break;
  }

  return (
    <div className="form__group">
      <input
        id={name}
        name={name}
        placeholder={nameCapitalized}
        className="form__group__input"
        onChange={handleChange}
        {...otherProps}
      />
      <label htmlFor={name} className="form__group__label">
        {nameCapitalized}
      </label>
    </div>
  );
};

export default FormGroup;
