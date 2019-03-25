import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

class Category extends Component {
  render() {
    return (
      <View style={styles.category_wrapper}>
        <View style={{ flex: 2 }}>
          <Image source={this.props.imageUri} style={styles.category} />
        </View>
        <View style={{ flex: 1, paddingLeft: 30, paddingTop: 10 }}>
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
  },
  category_wrapper: {
    height: 300,
    width: 125,
    marginLeft: 10,
    // borderWidth: 0.5,
    borderColor: "#dddddd"
  },
  category: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: "cover"
  }
});
