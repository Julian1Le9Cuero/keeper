import React from "react";
// import PropTypes from 'prop-types'
import "./manage-contacts.component.scss";
import Alert from "../Alert/Alert";
import Contact from "../Contact/Contact";
import ContactForm from "../ContactForm/ContactForm";
import SearchForm from "../SearchForm/SearchForm";

const ManageContacts = () => {
  return (
    <section className="manage-contacts">
      <div className="container margin-top-big">
        <Alert />
        <h2 className="heading-secondary margin-bottom-small">
          Manage contacts
        </h2>
        <SearchForm />
        <div className="manage-contacts__division">
          <div className="contacts">
            <Contact />
            <Contact />
            <Contact />
          </div>
          <div className="manage-contacts__form">
            <div className="margin-bottom-small">
              <h3 className="heading-tertiary">Add new contact</h3>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

// ManageContacts.propTypes = {}

export default ManageContacts;
