import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

class Category extends Component {
  render() {
    return (
      <View
        style={{
          height: 300,
          width: 130,
          marginLeft: 20,
          borderWidth: 0.5,
          borderColor: "#dddddd"
        }}
      >
        <View style={{ flex: 2 }}>
          <Image
            source={this.props.imageUri}
            style={{
              flex: 1,
              height: null,
              width: null,
              resizeMode: "cover"
            }}
          />
        </View>
        <View style={{ flex: 1, paddingLeft: 40, paddingTop: 10 }}>
          <Text>{this.props.name}</Text>
        </View>
      </View>
    );
  }
}

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});