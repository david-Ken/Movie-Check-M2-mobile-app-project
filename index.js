/** @format */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import React, { Component } from "react";

import Splashscreen from "./app/components/Splashscreen/Splashscreen";
import Log from "./app/components/Log";

class Starter extends Component {
  constructor(props) {
    super(props);
    this.state = { currentScreen: "Splashscreen" };
    //  console.log("Start doing somme task for about 3 seconds");

    setTimeout(() => {
      this.setState({ currentScreen: "Log" });
    }, 3000);
  }

  render() {
    let { currentScreen } = this.state;
    let mainScreen =
      currentScreen === "Splashscreen" ? <Splashscreen /> : <Log />;
    return mainScreen;
  }
}
export default Starter;
//AppRegistry.registerComponent(appName, () => Log);
AppRegistry.registerComponent(appName, () => App);
