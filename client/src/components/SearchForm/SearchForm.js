import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./search-form.component.scss";
import Button from "../Button/Button";
import { searchContacts, getContacts } from "../../redux/actions/contacts";

const SearchForm = ({ searchContacts, userContacts, getContacts }) => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;

    setSearch(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search && userContacts.length > 0) {
      setResults(search);
      searchContacts(search);
    } else if (!search && userContacts.length > 0) {
      setResults("");
      getContacts();
    }
  };

  return (
    <Fragment>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-form__input mr-1"
          type="search"
          name="search"
          id="search"
          placeholder="Search contact(s)"
          onChange={handleChange}
          value={search}
        />
        <Button type="submit" className="btn btn-tiny btn-secondary">
          Search
        </Button>
      </form>
      <div className="search-results margin-bottom-medium margin-top-small">
        <p className="results-paragraph">
          {results ? `Results for "${results}"` : "All results"}
        </p>
      </div>
    </Fragment>
  );
};

SearchForm.propTypes = {
  searchContacts: PropTypes.func.isRequired,
  userContacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  userContacts: state.contacts.userContacts,
});

export default connect(mapStateToProps, { searchContacts, getContacts })(
  SearchForm
);
