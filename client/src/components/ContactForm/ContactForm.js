import React from "react";
// import PropTypes from 'prop-types'
import FormGroup from "../FormGroup/FormGroup";
import Button from "../Button/Button";

const ContactForm = () => {
  return (
    <form action="" className="contact-form">
      {/* contactType, name, email, phone  */}
      <FormGroup
        name="name"
        type="text"
        handleChange={() => console.log("ff")}
      />
      <FormGroup
        name="email"
        type="email"
        handleChange={() => console.log("ff")}
      />
      <FormGroup
        name="phone"
        type="text"
        handleChange={() => console.log("ff")}
      />
      <div className="contact__type">
        <p>Contact type</p>
        <input type="radio" name="professional" id="professional" />
        <label htmlFor="professional">Professional</label>
        <input type="radio" name="personal" id="personal" />
        <label htmlFor="personal">Personal</label>
      </div>
      <Button
        kind="button"
        type="submit"
        className="btn btn-medium btn-success"
      >
        Add contact
      </Button>
    </form>
  );
};

// ContactForm.propTypes = {}

export default ContactForm;
