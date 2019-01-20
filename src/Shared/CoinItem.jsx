import React from "react";
import styled from "styled-components";
import { DeleteableTile } from "./Tile";

export const CoinItemStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const CoinSymbol = styled.div`
  justify-self: right;
`;

const DeleteIcon = styled.div`
  justify-self: right;
  display: none;
  ${DeleteableTile}:hover & {
    display: block;
    color: red;
  }
`;

export default function({ name, symbol, favourites }) {
  return (
    <CoinItemStyled>
      <div>{name}</div>
      {favourites ? (
        <DeleteIcon> X </DeleteIcon>
      ) : (
        <CoinSymbol>{symbol}</CoinSymbol>
      )}
    </CoinItemStyled>
  );
}
