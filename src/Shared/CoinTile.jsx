import React from "react";
import { AppContext } from "../App/AppProvider";
import { DeleteableTile, DisabledTile, SelectableTile } from "./Tile";
import CoinItem from "./CoinItem";
import CoinImage from "./CoinImage";

function clickCoinHandler(favourites, coinKey, addCoin, removeCoin) {
  return favourites
    ? () => {
        removeCoin(coinKey);
      }
    : () => {
        addCoin(coinKey);
      };
}

export default function({ coinKey, favourites }) {
  return (
    <AppContext.Consumer>
      {({ coinList, addCoin, removeCoin, isInSelected }) => {
        let coin = coinList[coinKey];

        let TileClass = SelectableTile;

        if (favourites) {
          TileClass = DeleteableTile;
        } else if (isInSelected(coinKey)) {
          TileClass = DisabledTile;
        }

        return (
          <TileClass
            onClick={clickCoinHandler(favourites, coinKey, addCoin, removeCoin)}
          >
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
