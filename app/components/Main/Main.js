// Main.js
import React, { Component } from "react";
import { StyleSheet, Platform, Image, Text, View, Button } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import firebase from "react-native-firebase";

import Icon from "react-native-vector-icons/Ionicons";
import Categories from "../Screens/Categories";
import MovieByCategory from "../Screens/MovieByCategory";
import Trips from "../Screens/Trips";
import Home from "../Screens/Home";
import Profile from "../Screens/Profile";

class Main extends Component {
  state = { currentUser: null };

  //Displaying the current user on the Main screen
  componentDidMount() {
    const { currentUser } = firebase.auth();
    this.setState({ currentUser });
  }

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
    const { currentUser } = this.state;
    return (
      <View style={styles.container}>
        <Text>Hi {currentUser && currentUser.email}!</Text>
        <Button onPress={this.signOutUser} title="Log Out" color="#841584" />
      </View>
    );
  }
}

export default createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarIcon: ({ tintColor }) => (
        //   <Icon name="videocam" colo={tintColor} size={24} />
        <Image
          source={require("../../assets/home-icon.png")}
          style={{ height: 24, width: 24, tintColor: tintColor }}
        />
      )
    }
  },
  Categories: {
    screen: Categories,
    navigationOptions: {
      tabBarLabel: "CATEGORIES",
      tabBarIcon: ({ tintColor }) => (
        // <Icon name="local_movies" color={tintColor} size={24} />
        <Image
          source={require("../../assets/video-player.png")}
          style={{ height: 24, width: 24, tintColor: tintColor }}
        />
      )
    }
  },
  Trips: {
    screen: Trips,
    navigationOptions: {
      tabBarLabel: "movies",
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require("../../assets/movies-info.png")}
          style={{ height: 24, width: 24, tintColor: tintColor }}
        />
      )
    }
  },
  MovieByCategory: {
    screen: MovieByCategory,
    navigationOptions: {
      tabBarLabel: "List",
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require("../../assets/list.png")}
          style={{ height: 24, width: 24, tintColor: tintColor }}
        />
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: "PROFILE",
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require("../../assets/user.png")}
          style={{ height: 24, width: 24, tintColor: tintColor }}
        />
      )
    }
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  }
});
