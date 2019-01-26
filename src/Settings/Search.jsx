import React from "react";
import styled from "styled-components";
import { backgroundColor2, fontSize2 } from "../Shared/Styles";
import { AppContext } from "../App/AppProvider";
import _ from "lodash";
import fuzzy from "fuzzy";

const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
`;

const SearchInput = styled.input`
  ${backgroundColor2};
  ${fontSize2}
  height: 25px;
  color: #1163c9;
  border: 1px solid;
  place-self: center left;
`;

const handleFilter = _.debounce((input, setFilteredCoins, coinList) => {
  const coinSymbols = Object.keys(coinList);
  const coinNames = coinSymbols.map(symbol => coinList[symbol].CoinName);
  const allStringsToSearch = coinSymbols.concat(coinNames);

  const results = fuzzy
    .filter(input, allStringsToSearch, {})
    .map(result => result.string);

  const filteredCoins = _.pickBy(coinList, (result, symbolKey) => {
    let coinName = result.CoinName;
    return _.includes(results, symbolKey) || _.includes(results, coinName);
  });

  console.log(filteredCoins);
  setFilteredCoins(filteredCoins);
}, 500);

function filterCoins(e, setFilteredCoins, coinList) {
  const input = e.target.value;
  if (!input) {
    setFilteredCoins(null);
    return;
  }
  handleFilter(input, setFilteredCoins, coinList);
}

export default function() {
  return (
    <AppContext.Consumer>
      {({ setFilteredCoins, coinList }) => (
        <SearchGrid>
          <div>Search coins: </div>
          <SearchInput
            onKeyUp={e => filterCoins(e, setFilteredCoins, coinList)}
          />
        </SearchGrid>
      )}
    </AppContext.Consumer>
  );
}
