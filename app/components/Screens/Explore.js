import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class Explore extends Component {
  render() {
    return (
      <View style={StyleSheet.container}>
        <Text> Explore </Text>
      </View>
    );
  }
}

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
