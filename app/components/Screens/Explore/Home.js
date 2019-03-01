import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
//import { Rating, AirbnbRating } from "react-native-elements";

class Home extends Component {
  ratingCompleted(rating) {
    console.log("Rating is: " + rating);
    return rating;
  }

  render() {
    return (
      <View
        style={{
          width: this.props.width / 2 - 30,
          // height: this.props.width / 2 - 30,
          height: this.props.width + 150,
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
            source={require("../../../assets/Posters/big1.jpg")}
          />
        </View>
        <View
          style={{
            flex: 1,
            // alignItems: "flex-start",
            //    justifyContent: "space-evenly",
            paddingLeft: 10
          }}
        >
          <Text style={{ fontSize: 14, color: "#b63838", textAlign: "center" }}>
            {"\n"}
            {this.props.type} {"\n\n"}
            {this.props.categoryId}
          </Text>

          {/*    <AirbnbRating
            style={{ margin: 0, padding: 0, fontSize: 14 }}
            count={5}
            reviews={["Terrible", "Bad", "Meh", "OK", "Good"]}
            defaultRating={11}
            size={20}
          /> */}
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
