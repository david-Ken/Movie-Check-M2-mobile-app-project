import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class Trips extends Component {
  render() {
    return (
      <View style={StyleSheet.container}>
        <Text> Trips </Text>
      </View>
    );
  }
}

export default Trips;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
