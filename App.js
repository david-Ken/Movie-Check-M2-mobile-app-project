import React, { Component } from "react";
import { StyleSheet, Platform, Image, Text, View } from "react-native";

import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";

// import the different screens
import Loading from "./app/components/Loading/Loading";
import SignUp from "./app/components/SignUp/SignUp";
import Login from "./app/components/Login/Login";
import Main from "./app/components/Main/Main";
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
