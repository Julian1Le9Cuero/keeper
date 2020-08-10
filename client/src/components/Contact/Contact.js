import React from "react";
// import PropTypes from 'prop-types'
import "./contact.component.scss";
import Button from "../Button/Button";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__heading separate">
        <h4 className="contact__name">
          John Doe
          <i className="fas fa-user-edit"></i>
          <i className="fas fa-comment-dots"></i>
        </h4>
        <span className="contact__type">Personal</span>
      </div>
      <p className="contact__email">
        <i className="far fa-envelope"></i>john@gmail.com
      </p>
      <p className="contact__phone">
        <i className="fas fa-phone"></i>253 639 6888
      </p>
      <Button kind="button" type="submit" className="btn btn-small btn-danger">
        Delete contact
      </Button>
    </div>
  );
};

// Contact.propTypes = {}

export default Contact;
