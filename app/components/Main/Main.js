// Main.js
import React, { Component } from "react";
import { StyleSheet, Platform, Image, Text, View, Button } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import firebase from "react-native-firebase";

import Icon from "react-native-vector-icons/Ionicons";
import Saved from "../Screens/Saved";
import Inbox from "../Screens/Inbox";
import Trips from "../Screens/Trips";
import Explore from "../Screens/Explore";
import Profile from "../Screens/Profile";

export default class Main extends Component {
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

/* export default createBottomTabNavigator({
  Explore: {
    screen: Explore,
    navigationOptions: {
      tabBarLabel: "EXPLORE",
      tabBarIcon: ({ tinColor }) => (
        <Icon name="ios-search-outline" colo={tinColor} size={24} />
      )
    }
  },
  Saved: {
    screen: Saved,
    navigationOptions: {
      tabBarLabel: "SAVED",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-heart-outline" color={tintColor} size={24} />
      )
    }
  },
  Trips: {
    screen: Trips,
    navigationOptions: {
      tabBarLabel: "TRIPS",
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require("../../assets/airbnb.png")}
          style={{ height: 24, width: 24, tintColor: tintColor }}
        />
      )
    }
  },
  Inbox: {
    screen: Inbox,
    navigationOptions: {
      tabBarLabel: "INBOX",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-chatboxes-outline" color={tintColor} size={24} />
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: "PROFILE",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-chatboxes-outline" color={tintColor} size={24} />
      )
    }
  } ,
  {
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'grey',
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5
      }
    }
  }
}); */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  }
});
