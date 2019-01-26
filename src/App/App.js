import React, { Component } from "react";
import "./App.css";
import AppLayout from "./AppLayout";
import AppMenu from "./AppMenu";
import { AppProvider } from "./AppProvider";
import Settings from "./../Settings";
import Dashboard from "./../Dashboard";
import Content from "./../Shared/Content";

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
          <Content>
            <Dashboard />
            <Settings appName={this.appName} />
          </Content>
        </AppProvider>
      </AppLayout>
    );
  }
}

export default App;
