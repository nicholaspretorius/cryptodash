import React from "react";
import styled from "styled-components";

export const CoinItemStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const CoinSymbol = styled.div`
  justify-self: right;
`;

export default function({ name, symbol }) {
  return (
    <CoinItemStyled>
      <div>{name}</div>
      <CoinSymbol>{symbol}</CoinSymbol>
    </CoinItemStyled>
  );
}
