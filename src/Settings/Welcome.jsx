import React from "react";
import styled from "styled-components";
import { AppContext } from "../App/AppProvider";

let Welcome = (props, { className }) => {
  return (
    <AppContext.Consumer>
      {({ firstVisit }) =>
        firstVisit ? (
          <div>
            <h1 className={props.className}>Welcome to {props.name}</h1>
            <p>Please select your favourite coins.</p>
          </div>
        ) : null
      }
    </AppContext.Consumer>
  );
};

Welcome = styled(Welcome)`
  font-weight: bold;
`;

export default Welcome;
