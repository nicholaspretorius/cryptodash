import React from "react";
import Welcome from "./Welcome";
import PropTypes from "prop-types";
import ConfirmButton from "./ConfirmButton";
import Page from "./../Shared/Page";
import CoinGrid from "./CoinGrid";

export default props => {
  return (
    <Page name={"settings"}>
      <Welcome name={props.appName} />
      <ConfirmButton />
      <CoinGrid />
    </Page>
  );
};

Welcome.propTypes = {
  name: PropTypes.string.isRequired
};
