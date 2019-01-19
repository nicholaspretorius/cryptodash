import React, { Component } from "react";
import "./App.css";
import AppLayout from "./AppLayout";
import AppMenu from "./AppMenu";
import { AppProvider } from "./AppProvider";
import Settings from "./../Settings";

class App extends Component {
  constructor(props) {
    super(props);
    this.appName = "CryptoDash";
  }
  render() {
    return (
      <AppLayout>
        <AppProvider>
          <AppMenu appName={this.appName} />
          <Settings appName={this.appName} />
        </AppProvider>
      </AppLayout>
    );
  }
}

export default App;
