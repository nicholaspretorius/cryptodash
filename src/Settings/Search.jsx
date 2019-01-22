import React from "react";
import styled from "styled-components";
import { backgroundColor2, fontSize2 } from "../Shared/Styles";

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

export default function() {
  return (
    <SearchGrid>
      <div>Search coins: </div>
      <SearchInput />
    </SearchGrid>
  );
}
