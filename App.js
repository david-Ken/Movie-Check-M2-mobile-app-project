import React, { Component } from "react";
import { StyleSheet, Platform, Image, Text, View } from "react-native";

import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
// import the different screens
import Loading from "./Loading";
import SignUp from "./SignUp";
import Login from "./Login";
import Main from "./Main";
// create our app's navigation stack

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: Loading,
      SignUp: SignUp,
      Login: Login,
      Main: Main
    },
    {
      initialRouteName: "Loading"
    }
  )
);
