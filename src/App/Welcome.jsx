import React from "react";
import styled from 'styled-components';

let Welcome = (props, {className}) => {
    return (<h1 className={props.className}>Hello {props.name}</h1>)
};

Welcome = styled(Welcome)`
color:red; font-weight: bold
`

export default Welcome;