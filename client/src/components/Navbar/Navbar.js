import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types'
import "./navbar.component.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">
        <Link className="logo__link" to="/">
          <i class="fas fa-layer-group"></i> Keeper
        </Link>
      </h2>
      <ul className="navigation">
        <li className="navigation__item">
          <Link className="navigation__item__link" to="/login">
            Log in
          </Link>
        </li>
        <li className="navigation__item">
          <Link className="navigation__item__link" to="/tasks">
            Tasks
          </Link>
        </li>
        <li className="navigation__item">
          <Link className="navigation__item__link" to="/tasks">
            <i className="fas fa-user-plus"></i> Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
};

// Navbar.propTypes = {}

export default Navbar;
