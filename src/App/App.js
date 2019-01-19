import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";
import Welcome from "./Welcome";

class App extends Component {
  render() {
    return <Welcome name={"CryptoDash"} />;
  }
}

Welcome.propTypes = {
  name: PropTypes.string.isRequired
};

export default App;
