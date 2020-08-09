import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Spinner from "../Spinner/Spinner";

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  loading,
  ...otherProps
}) => {
  return loading ? (
    <Spinner />
  ) : !isAuthenticated ? (
    <Redirect to="/login" />
  ) : (
    <Route render={(props) => <Component {...props} />} {...otherProps} />
  );
};

PrivateRoute.propTypes = {
  loading: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.users.loading,
  isAuthenticated: state.users.isAuthenticated,
});

export default connect(mapStateToProps)(PrivateRoute);
