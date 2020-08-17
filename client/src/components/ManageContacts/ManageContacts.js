import React from "react";
import "./manage-contacts.component.scss";

import Contacts from "../Contacts/Contacts";
import ContactForm from "../ContactForm/ContactForm";
import SearchForm from "../SearchForm/SearchForm";

const ManageContacts = () => {
  return (
    <section className="manage-contacts">
      <div className="container margin-top-big">
        <h2 className="heading-secondary margin-bottom-small">
          Manage contacts
        </h2>
        <SearchForm />
        <div className="manage-contacts__division">
          <Contacts />
          <div className="manage-contacts__form">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageContacts;
