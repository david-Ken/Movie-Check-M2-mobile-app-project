import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class Tags extends Component {
  render() {
    return (
      <View
        style={{
          minHeight: 20,
          minWidth: 40,
          padding: 5,
          backgroundColor: "white",
          borderColor: "#dddddd",
          borderWidth: 0.2,
          borderRadius: 1
        }}
      >
        <Text
          style={{
            fontWeight: "700",
            fontSize: 10
          }}
        >
          {this.props.name}
        </Text>
      </View>
    );
  }
}

export default Tags;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
