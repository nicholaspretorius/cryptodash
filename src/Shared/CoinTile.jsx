import React from "react";
import { AppContext } from "../App/AppProvider";
import { DeleteableTile, SelectableTile } from "./Tile";
import CoinItem from "./CoinItem";
import CoinImage from "./CoinImage";

export default function({ coinKey, favourites }) {
  return (
    <AppContext.Consumer>
      {({ coinList }) => {
        let coin = coinList[coinKey];
        const TileClass = favourites ? DeleteableTile : SelectableTile;
        return (
          <TileClass>
            <CoinItem
              name={coin.CoinName}
              symbol={coin.Symbol}
              favourites={favourites}
            />
            <CoinImage coin={coin} />
          </TileClass>
        );
      }}
    </AppContext.Consumer>
  );
}
