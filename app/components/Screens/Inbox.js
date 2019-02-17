import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class Inbox extends Component {
  render() {
    return (
      <View style={StyleSheet.container}>
        <Text> Inbox </Text>
      </View>
    );
  }
}

export default Inbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
