import React, { Component } from "react";
import "./App.css";
import AppLayout from "./AppLayout";
import AppMenu from "./AppMenu";
import { AppProvider } from "./AppProvider";
import Settings from "./../Settings";
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
            <Settings appName={this.appName} />
          </Content>
        </AppProvider>
      </AppLayout>
    );
  }
}

export default App;
