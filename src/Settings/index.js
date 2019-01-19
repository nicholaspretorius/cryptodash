import React from "react";
import Welcome from "./Welcome";
import PropTypes from "prop-types";
import ConfirmButton from "./ConfirmButton";

export default props => {
  return (
    <div>
      <Welcome name={props.appName} />
      <ConfirmButton />
    </div>
  );
};

Welcome.propTypes = {
  name: PropTypes.string.isRequired
};
