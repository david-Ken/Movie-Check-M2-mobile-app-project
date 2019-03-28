import React, { Component } from "react";
import firebase from "react-native-firebase";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
  Button,
  Dimensions,
  ActivityIndicator
} from "react-native";
import { Avatar, Badge, Icon, withBadge } from "react-native-elements";
import { movies } from "./data";
import { getMoviesByYear, initializeEmptyArray } from "./data";

const { height, width } = Dimensions.get("window");

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {};

  //Logout user
  signOutUser() {
    firebase
      .auth()
      .signOut()
      .then(function() {
        this.props.navigation.navigate("Loading");
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hi </Text>
        <Button onPress={this.signOutUser} title="Log Out" color="#841584" />
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
