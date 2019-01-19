import React from "react";
import styled from "styled-components";

let Welcome = (props, { className }) => {
  return (
    <div>
      <h1 className={props.className}>Welcome to {props.name}</h1>
      <p>This is my simple React crypto dashboard.</p>
    </div>
  );
};

Welcome = styled(Welcome)`
  color: red;
  font-weight: bold;
`;

export default Welcome;
