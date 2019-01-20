import React from "react";
import styled, { css } from "styled-components";
import { AppContext } from "../App/AppProvider";
import { SelectableTile } from "./../Shared/Tile";
import CoinTile from "./../Shared/CoinTile";

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
`;

const getCoins = coinList => {
  return Object.keys(coinList).slice(0, 100);
};

export default function() {
  return (
    <AppContext.Consumer>
      {({ coinList }) => {
        return (
          <CoinGridStyled>
            {getCoins(coinList).map(coin => (
              <CoinTile coinKey={coin} key={coin} />
            ))}
          </CoinGridStyled>
        );
      }}
    </AppContext.Consumer>
  );
}
