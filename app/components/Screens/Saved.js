import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class Saved extends Component {
  render() {
    return (
      <View style={StyleSheet.container}>
        <Text> Saved </Text>
      </View>
    );
  }
}

export default Saved;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
