import React from "react";

export default function({ coin, style }) {
  return (
    <img
      alt={coin.Symbol}
      src={`http://cryptocompare.com/${coin.ImageUrl}`}
      style={style || { height: "50px" }}
    />
  );
}
