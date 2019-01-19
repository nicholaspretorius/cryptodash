import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";

const Welcome = props => {
  return <h1>Hello {props.name}</h1>;
};

class App extends Component {
  render() {
    return <Welcome name="CryptoDash" />;
  }
}

Welcome.propTypes = {
  name: PropTypes.string.isRequired
};

export default App;
