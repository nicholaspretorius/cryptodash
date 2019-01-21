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

const getCoins = (coinList, favourites, selectedCoins) => {
  return favourites ? selectedCoins : Object.keys(coinList).slice(0, 100);
};

export default function({ favourites }) {
  return (
    <AppContext.Consumer>
      {({ coinList, selectedCoins }) => {
        return (
          <CoinGridStyled>
            {getCoins(coinList, favourites, selectedCoins).map(coin => (
              <CoinTile favourites={favourites} coinKey={coin} key={coin} />
            ))}
          </CoinGridStyled>
        );
      }}
    </AppContext.Consumer>
  );
}
