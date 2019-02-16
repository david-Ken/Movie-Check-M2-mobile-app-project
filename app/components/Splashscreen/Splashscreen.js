import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Splashscreen extends Component {
  constructor(props) {
    super(props);
    this.state = { timer: 0 };
    setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  }

  render() {
    return (
      <View style={styles.splashContainer}>
        <Text style={styles.splashTitle}>
          {`Welcome to Movie Check :  ${this.state.timer}`}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
