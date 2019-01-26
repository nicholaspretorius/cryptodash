import React from "react";
import PropTypes from "prop-types";
import Page from "./../Shared/Page";
import PriceGrid from "./PriceGrid";

export default props => {
  return (
    <Page name={"dashboard"}>
      <h1>Dashboard</h1>
      <PriceGrid />
    </Page>
  );
};
