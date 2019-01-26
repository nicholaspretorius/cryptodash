import React from "react";
import styled from "styled-components";
import { AppContext } from "./../App/AppProvider";
import PriceTile from "./PriceTile";

const PriceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 15px;
`;

export default function() {
  return (
    <AppContext.Consumer>
      {({ prices }) => (
        <PriceGrid>
          {prices.map((price, index) => {
            console.log(price);
            return <PriceTile key={index} price={price} index={index} />;
          })}
        </PriceGrid>
      )}
    </AppContext.Consumer>
  );
}
