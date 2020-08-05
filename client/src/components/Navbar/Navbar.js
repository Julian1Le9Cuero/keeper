import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./navbar.component.scss";

const Navbar = ({ isAuthenticated, loading }) => {
  const guestLinks = (
    <ul className="navigation">
      <li className="navigation__item">
        <Link className="navigation__item__link" to="/login">
          <i className="fas fa-sign-in-alt"></i> Log in
        </Link>
      </li>
      <li className="navigation__item">
        <Link className="navigation__item__link" to="/register">
          <i className="fas fa-door-open"></i> Register
        </Link>
      </li>
      <li className="navigation__item">
        <Link className="navigation__item__link" to="/about">
          About
        </Link>
      </li>
    </ul>
  );
  const authLinks = (
    <ul className="navigation">
      <li className="navigation__item">
        <Link className="navigation__item__link" to="/tasks">
          <i className="fas fa-folder-open"></i>
          Tasks
        </Link>
      </li>
      <li className="navigation__item">
        <Link className="navigation__item__link" to="/tasks">
          <i className="fas fa-user-plus"></i> Contacts
        </Link>
      </li>
      <li className="navigation__item">
        <Link className="navigation__item__link" to="/logout">
          Log out
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar">
      <h2 className="logo">
        <Link className="logo__link" to="/">
          <i className="fas fa-layer-group"></i> Keeper
        </Link>
      </h2>
      {!loading && isAuthenticated ? authLinks : guestLinks}
    </nav>
  );
};

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.users.isAuthenticated,
  loading: state.users.loading,
});

export default connect(mapStateToProps)(Navbar);
