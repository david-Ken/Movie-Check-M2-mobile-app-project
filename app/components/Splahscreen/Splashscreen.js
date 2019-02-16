import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Splashscreen extends Component {
  render() {
    return (
      <View style={styles.splashContainer}>
        <Text style={styles.splashTitle}> Hello it is splashcreen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  splashContainer: {
    backgroundColor: "green",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  splashTitle: {
    fontWeight: "bold",
    fontSize: 18
  }
});
