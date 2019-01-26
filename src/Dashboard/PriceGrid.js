import React from "react";
import styled from "styled-components";
import { AppContext } from "./../App/AppProvider";
import PriceTile from "./PriceTile";

const PriceGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 15px;
`;

export default function() {
  return (
    <AppContext.Consumer>
      {({ prices }) => (
        <PriceGrid>
          {prices.map((price, index) => {
            return (
              <PriceTile
                key={`priceTile-${index}`}
                price={price}
                index={index}
              />
            );
          })}
        </PriceGrid>
      )}
    </AppContext.Consumer>
  );
}
