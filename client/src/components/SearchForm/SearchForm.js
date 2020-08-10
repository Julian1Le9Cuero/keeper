import React, { Fragment } from "react";
// import PropTypes from 'prop-types'
import "./search-form.component.scss";
import Button from "../Button/Button";

const SearchForm = () => {
  return (
    <Fragment>
      <form className="search-form">
        <input
          className="search-form__input mr-1"
          type="search"
          name="search"
          id="search"
          placeholder="Search contact(s)"
        />
        <Button
          type="submit"
          className="btn btn-tiny btn-secondary"
          handleChange={() => console.log("d")}
        >
          Search
        </Button>
      </form>
      <div className="search-results margin-bottom-medium margin-top-small">
        <p className="results-paragraph">Results for "John"</p>
      </div>
    </Fragment>
  );
};

// SearchForm.propTypes = {}

export default SearchForm;
