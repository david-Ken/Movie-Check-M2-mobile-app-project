import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import StarRating from "react-native-star-rating";

class Home extends Component {
  render() {
    return (
      <View
        style={{
          width: this.props.width / 2 - 30,
          height: this.props.width / 2 - 30,
          borderWidth: 0.5,
          borderColor: "#dddddd"
        }}
      >
        <View style={{ flex: 1 }}>
          <Image
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: "cover"
            }}
            source={require("../../../assets/home.jpg")}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "space-evenly",
            paddingLeft: 10
          }}
        >
          <Text style={{ fontSize: 14, color: "#b63838" }}>
            {this.props.type}
          </Text>
          <Text style={{ fontSize: 12, fontWeight: "bold" }}>
            {this.props.name}
          </Text>
          <Text style={{ fontSize: 12 }}>{this.props.price}$</Text>
          <StarRating
            disabled={true}
            maxStars={5}
            rating={this.props.rating}
            StarSize={10}
          />
        </View>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
