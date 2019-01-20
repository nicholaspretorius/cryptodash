import React from "react";
import { AppContext } from "../App/AppProvider";
import { SelectableTile } from "./Tile";
import CoinItem from "./CoinItem";
import CoinImage from "./CoinImage";

export default function({ coinKey }) {
  return (
    <AppContext.Consumer>
      {({ coinList }) => {
        let coin = coinList[coinKey];

        const TileClass = SelectableTile;
        return (
          <TileClass>
            <CoinItem name={coin.CoinName} symbol={coin.Symbol} />
            <CoinImage coin={coin} />
          </TileClass>
        );
      }}
    </AppContext.Consumer>
  );
}
