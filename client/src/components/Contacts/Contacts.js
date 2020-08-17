import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./contacts.component.scss";
import Contact from "../Contact/Contact";
import { getContacts } from "../../redux/actions/contacts";

const Contacts = ({ getContacts, userContacts, count, contactsLoading }) => {
  useEffect(() => {
    getContacts();
  }, [getContacts]);

  const hasContacts = userContacts.length > 0;

  return (
    <section className="contacts">
      {contactsLoading ? (
        <h4>Fetching contacts...</h4>
      ) : hasContacts ? (
        userContacts.map((contact) => (
          <Contact key={contact._id} contact={contact} />
        ))
      ) : count === -1 ? (
        <h3 className="heading-tertiary">
          There were no results for your search term.
        </h3>
      ) : (
        <h3 className="heading-tertiary">
          You haven't yet added any contact. Add one right there &rarr;
        </h3>
      )}
    </section>
  );
};

Contacts.propTypes = {
  getContacts: PropTypes.func.isRequired,
  userContacts: PropTypes.array.isRequired,
  contactsLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  userContacts: state.contacts.userContacts,
  contactsLoading: state.contacts.contactsLoading,
  count: state.contacts.count,
});

export default connect(mapStateToProps, { getContacts })(Contacts);
