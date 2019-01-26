import React from "react";
import styled, { css } from "styled-components";
import { AppContext } from "./AppProvider";

const Logo = styled.div`
  font-family: "Do Hyeon", sans-serif;
  font-size: 1.5em;
`;

const Menu = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 100px 100px;
  padding-left: 0;
  margin-bottom: 1em;
`;

const MenuItem = styled.div`
  list-style-type: none;
  font-family: "Do Hyeon", sans-serif;
  color: white;
  cursor: pointer;
  ${props =>
    props.active &&
    css`
      color: red;
    `}
  ${props =>
    props.hidden &&
    css`
      display: none;
    `}
`;

const toProperCase = str => {
  return str.charAt(0).toUpperCase() + str.substr(1);
};

const MenuButton = ({ name }) => {
  return (
    <AppContext.Consumer>
      {({ firstVisit, page, setPage }) => (
        <MenuItem
          active={page === name}
          onClick={() => setPage(name)}
          hidden={firstVisit && name === "dashboard"}
        >
          {toProperCase(name)}
        </MenuItem>
      )}
    </AppContext.Consumer>
  );
};

export default props => {
  return (
    <Menu>
      <Logo>{props.appName}</Logo>
      <MenuItem />
      <MenuButton name={"dashboard"} active />
      <MenuButton name={"settings"} />
    </Menu>
  );
};
