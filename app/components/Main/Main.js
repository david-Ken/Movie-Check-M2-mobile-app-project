// Main.js
import React, { Component } from "react";
import { StyleSheet, Platform, Image, Text, View, Button } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import firebase from "react-native-firebase";

import Icon from "react-native-vector-icons/Ionicons/";
import Saved from "../Screens/Saved";
import Inbox from "../Screens/Inbox";
import Trips from "../Screens/Trips";
import Explore from "../Screens/Explore";

class Main extends Component {
  state = { currentUser: null };

  //Displaying the current user on the Main screen
  componentDidMount() {
    const { currentUser } = firebase.auth();
    this.setState({ currentUser });
  }

  //Logout user
  signOutUser() {
    firebase.auth().signOut();
    // this.props.navigation.navigate("Loading");
  }

  render() {
    const { currentUser } = this.state;
    return (
      <View style={styles.container}>
        <Text>Hi {currentUser && currentUser.email}!</Text>
        <Button onPress={this.signOutUser} title="Log Out" color="#841584" />
      </View>
    );
  }
}

/* const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
});

export default createAppContainer(TabNavigator); */

export default createBottomTabNavigator({
  Explore: {
    screen: Explore /*,
    navigationOptions: {
      tabBarLabel: "Explore" ,
       tabBarIcon: ({ tinColor }) => (
        <Icon name="ios-search-outline" colo={tinColor} size={24} />
      )
  }*/
  },
  Saved: {
    screen: Saved
  },
  Trips: {
    screen: Trips
  },
  Inbox: {
    screen: Inbox
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
