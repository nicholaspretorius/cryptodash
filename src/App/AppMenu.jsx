import React from "react";
import styled from "styled-components";

const Menu = styled.ul`
  display: grid;
  grid-template-columns: 1fr auto 100px 100px;
  padding-left: 0;
`;

const MenuItem = styled.li`
  list-style-type: none;
  font-family: "Do Hyeon", sans-serif;
`;

export default props => {
  return (
    <Menu>
      <MenuItem>{props.appName}</MenuItem>
      <MenuItem />
      <MenuItem>Dashboard</MenuItem>
      <MenuItem>Settings</MenuItem>
    </Menu>
  );
};
