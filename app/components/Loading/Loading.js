// Loading.js
import React, { Component } from "react";
import { View, ActivityIndicator, StyleSheet, Image } from "react-native";
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
      <View style={styles.splashContainer}>
        <Image
          source={require("../../assets/Logo/logo.jpg")}
          style={{ width: 350, height: 300 }}
        />
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
    //  backgroundColor: "rgb(32,53,70)",
    backgroundColor: "#102030",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
