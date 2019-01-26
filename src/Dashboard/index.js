import React from "react";
import styled from "styled-components";
import Page from "./../Shared/Page";
import PriceGrid from "./PriceGrid";
import CoinSpotlight from "./CoinSpotlight";

const ChartGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 15px;
  margin: 15px 0;
`;

export default props => {
  return (
    <Page name={"dashboard"}>
      <h1>Dashboard</h1>
      <PriceGrid />
      <ChartGrid>
        <CoinSpotlight />
        <div>Chart</div>
      </ChartGrid>
    </Page>
  );
};
