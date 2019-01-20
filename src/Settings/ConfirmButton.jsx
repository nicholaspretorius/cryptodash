import React from "react";
import styled from "styled-components";
import { AppContext } from "../App/AppProvider";

const ConfirmButtonStyled = styled.div`
  margin: 1em;
  color: blue;
  cursor: pointer;
  &:hover {
    color: yellow;
  }
`;

export default function() {
  return (
    <AppContext.Consumer>
      {({ confirmSettings, page }) =>
        page === "settings" ? (
          <ConfirmButtonStyled onClick={confirmSettings}>
            Save Settings
          </ConfirmButtonStyled>
        ) : null
      }
    </AppContext.Consumer>
  );
}
