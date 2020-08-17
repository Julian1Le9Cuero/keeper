import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./contact-form.component.scss";

import FormGroup from "../FormGroup/FormGroup";
import Button from "../Button/Button";
import Alert from "../Alert/Alert";
import { addContact } from "../../redux/actions/contacts";

class ContactForm extends React.Component {
  constructor() {
    super();
    this.state = {
      contactData: {
        name: "",
        email: "",
        phone: "",
        contactType: "personal",
      },
    };
  }

  render() {
    const { addContact, history } = this.props;
    const { contactData } = this.state;

    const handleChange = (e) => {
      const { name, value } = e.target;
      this.setState({ contactData: { ...contactData, [name]: value } });
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      addContact(contactData, history);

      this.setState({
        contactData: {
          name: "",
          email: "",
          phone: "",
          contactType: "personal",
        },
      });
    };
    const { name, email, phone, contactType } = contactData;
    return (
      <Fragment>
        <Alert />
        <div className="margin-bottom-small">
          <h3 className="heading-tertiary">Add new contact</h3>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <FormGroup
            name="name"
            type="text"
            handleChange={handleChange}
            value={name}
          />
          <FormGroup
            name="email"
            type="email"
            handleChange={handleChange}
            value={email}
          />
          <FormGroup
            name="phone"
            type="text"
            handleChange={handleChange}
            value={phone}
          />
          <div className="contact-form__type margin-bottom-small">
            <p>Contact type</p>
            <input
              type="radio"
              name="contactType"
              value="professional"
              id="professional"
              onChange={handleChange}
              checked={contactType === "professional"}
            />{" "}
            <label
              className="contact-form__type__label mr-2"
              htmlFor="professional"
            >
              Professional
            </label>
            <input
              type="radio"
              name="contactType"
              value="personal"
              id="personal"
              onChange={handleChange}
              checked={contactType === "personal"}
            />{" "}
            <label className="contact-form__type__label" htmlFor="personal">
              Personal
            </label>
          </div>
          <Button
            kind="button"
            type="submit"
            className="btn btn-medium btn-success"
          >
            Add contact
          </Button>
        </form>
      </Fragment>
    );
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  contact: state.contacts.contact,
});

export default connect(mapStateToProps, { addContact })(
  withRouter(ContactForm)
);
