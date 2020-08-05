import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./alert.component.scss";

const Alert = ({ alerts }) => {
  return alerts.map(({ type, id, message }) => (
    <div key={id} className={`alert alert-${type}`}>
      {message}
    </div>
  ));
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert.alerts,
});

export default connect(mapStateToProps)(Alert);
