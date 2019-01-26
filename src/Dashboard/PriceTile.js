import React from "react";
import styled, { css } from "styled-components";
import { SelectableTile } from "../Shared/Tile";
import { fontSize3, fontSizeBig, greenBoxShadow } from "../Shared/Styles";
import { AppContext } from "../App/AppProvider";

const PriceTileHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const JustifyRight = styled.div`
  justify-self: right;
`;

const JustifyLeft = styled.div`
  justify-self: left;
`;

const TickerPrice = styled.div`
  ${fontSizeBig}
`;

const PercentChange = styled.div`
  ${props => (props.change > 0 ? "color: green" : "color: red")}
`;

function PriceChange({ data }) {
  return (
    <PercentChange change={data.CHANGEPCT24HOUR}>
      <JustifyRight>{numberFormat(data.CHANGEPCT24HOUR)}%</JustifyRight>
    </PercentChange>
  );
}

const numberFormat = number => {
  return +(number + "").slice(0, 4);
};

const PriceTileStyled = styled(SelectableTile)`
  ${props =>
    props.compact &&
    css`
      ${fontSize3}
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 5px;
    `}

  ${props =>
    props.currentFavourite &&
    css`
      ${greenBoxShadow}
      pointer-events: none;
    `}
`;

function PriceTile({ symbol, data, currentFavourite, setCurrentFavourite }) {
  return (
    <PriceTileStyled
      onClick={setCurrentFavourite}
      currentFavourite={currentFavourite}
    >
      <PriceTileHeader>
        <JustifyLeft>{symbol}</JustifyLeft>
        <PriceChange data={data} />
      </PriceTileHeader>
      <TickerPrice>${numberFormat(data.PRICE)}</TickerPrice>
    </PriceTileStyled>
  );
}

function PriceTileCompact({
  symbol,
  data,
  currentFavourite,
  setCurrentFavourite
}) {
  return (
    <PriceTileStyled
      compact
      onClick={setCurrentFavourite}
      currentFavourite={currentFavourite}
    >
      <JustifyLeft>{symbol}</JustifyLeft>
      <div>${numberFormat(data.PRICE)}</div>
      <JustifyRight>
        <PriceChange data={data} />
      </JustifyRight>
    </PriceTileStyled>
  );
}

export default function({ price, index }) {
  let symbol = Object.keys(price)[0];
  let data = price[symbol]["USD"];
  let TileClass = index < 5 ? PriceTile : PriceTileCompact;
  return (
    <AppContext.Consumer>
      {({ currentFavourite, setCurrentFavourite }) => (
        <TileClass
          symbol={symbol}
          data={data}
          currentFavourite={currentFavourite === symbol}
          setCurrentFavourite={() => setCurrentFavourite(symbol)}
        >
          {symbol} {data.PRICE}
        </TileClass>
      )}
    </AppContext.Consumer>
  );
}
