import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./contact.component.scss";
import Button from "../Button/Button";
import { deleteContact, findContact } from "../../redux/actions/contacts";

const Contact = ({ contact, deleteContact, findContact }) => {
  const { _id, name, contactType, email, phone } = contact;
  const type =
    contactType[0].toUpperCase() + contactType.substring(1, contactType.length);

  return (
    <div className="contact">
      <div className="contact__heading separate">
        <h4 className="contact__name">
          {`${name} `}
          <i
            className="fas fa-user-edit contact__name__icon contact__name__icon-edit ml-1 mr-1"
            onClick={() => findContact(_id)}
          ></i>
          <i className="fas fa-comment-dots contact__name__icon contact__name__icon-chat"></i>
        </h4>
        <div className="contact__type">
          <span className={`contact__type-${contactType}`}>{type}</span>
        </div>
      </div>
      <div className="py-2">
        <p className="contact__email">
          <i className="far fa-envelope mr-1"></i>
          {email}
        </p>
        {phone && (
          <p className="contact__phone">
            <i className="fas fa-phone mr-1"></i>
            {phone}
          </p>
        )}
      </div>
      <Button
        kind="button"
        type="submit"
        className="btn btn-small btn-danger"
        onClick={() => deleteContact(_id)}
      >
        Delete contact
      </Button>
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  findContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default connect(null, { deleteContact, findContact })(Contact);
