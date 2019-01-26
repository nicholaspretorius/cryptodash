import React from "react";
import styled from "styled-components";
import { AppContext } from "../App/AppProvider";
import CoinTile from "./../Shared/CoinTile";

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 15px;
`;

const getFilteredCoins = (coinList, filteredCoins) => {
  return (
    (filteredCoins && Object.keys(filteredCoins)) ||
    Object.keys(coinList).slice(0, 100)
  );
};

const getCoins = (coinList, favourites, selectedCoins, filteredCoins) => {
  return favourites ? selectedCoins : getFilteredCoins(coinList, filteredCoins);
};

export default function({ favourites }) {
  return (
    <AppContext.Consumer>
      {({ coinList, selectedCoins, filteredCoins }) => {
        return (
          <CoinGridStyled>
            {getCoins(coinList, favourites, selectedCoins, filteredCoins).map(
              coin => (
                <CoinTile favourites={favourites} coinKey={coin} key={coin} />
              )
            )}
          </CoinGridStyled>
        );
      }}
    </AppContext.Consumer>
  );
}
