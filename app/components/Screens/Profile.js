import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class Profile extends Component {
  render() {
    return (
      <View style={StyleSheet.container}>
        <Text> Profile </Text>
      </View>
    );
  }
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
