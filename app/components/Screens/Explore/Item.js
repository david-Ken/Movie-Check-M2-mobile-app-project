{
  /* 
  
  
    ratingCompleted(rating) {
    console.log("Rating is: " + rating);
    return rating;
  }

  
  <AirbnbRating
            style={{ margin: 0, padding: 0, fontSize: 14 }}
            count={5}
            reviews={["Terrible", "Bad", "Meh", "OK", "Good"]}
            defaultRating={11}
            size={20}
          /> 
          */
}

import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");
class Item extends Component {
  render() {
    return (
      <View style={styles.item_wrapper}>
        <View style={{ flex: 2 }}>
          <Image source={this.props.imageUri} style={styles.item} />
        </View>
        <View style={{ flex: 1, paddingLeft: 40, paddingTop: 10 }}>
          <Text>{this.props.name}</Text>
        </View>
      </View>
    );
  }
}

export default Item;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  item_wrapper: {
    height: 300,
    width: width / 2 - 40,
    marginHorizontal: 10
  },
  item: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: "cover"
  }
});
