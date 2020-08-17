import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./alert.component.scss";

const Alert = ({ alerts }) => {
  return alerts.map(({ type, id, message }) => (
    <div key={id} className={`alert alert-${type} margin-top-small`}>
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
