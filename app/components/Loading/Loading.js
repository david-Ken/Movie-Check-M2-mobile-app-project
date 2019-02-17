// Loading.js
import React, { Component } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import firebase from "react-native-firebase";

export default class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = { timer: 0 };
    setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  }

  //Redirection if user is logged or not
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      // this.props.navigation.navigate(user ? "Main" : "SignUp");

      setTimeout(() => {
        this.props.navigation.navigate(user ? "Main" : "SignUp");
      }, 3000);
    });
  }

  render() {
    return (
      /*  <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View> */
      <View style={styles.splashContainer}>
        <Text style={styles.splashTitle}>
          {`Welcome to Movie Check :  ${this.state.timer}`}
        </Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  splashContainer: {
    backgroundColor: "rgb(32,53,70)",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  splashTitle: {
    fontWeight: "bold",
    fontSize: 28,
    color: "white"
  }
});
