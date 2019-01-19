import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";
import Welcome from "./Welcome";
import AppLayout from "./AppLayout";
import AppMenu from "./AppMenu";

class App extends Component {
  constructor(props) {
    super(props);
    this.appName = "CryptoDash";
  }
  render() {
    return (
      <AppLayout>
        <AppMenu appName={this.appName} />
        <Welcome name={this.appName} />
      </AppLayout>
    );
  }
}

Welcome.propTypes = {
  name: PropTypes.string.isRequired
};

export default App;
