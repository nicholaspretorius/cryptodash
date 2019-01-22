import React from "react";
import Welcome from "./Welcome";
import PropTypes from "prop-types";
import ConfirmButton from "./ConfirmButton";
import Page from "./../Shared/Page";
import CoinGrid from "./CoinGrid";
import Search from "./../Settings/Search";

export default props => {
  return (
    <Page name={"settings"}>
      <Welcome name={props.appName} />
      <CoinGrid favourites />
      <ConfirmButton />
      <Search />
      <CoinGrid />
    </Page>
  );
};

Welcome.propTypes = {
  name: PropTypes.string.isRequired
};
