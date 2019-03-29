import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput
} from "react-native";
import firebase from "react-native-firebase";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "davidmyken@gmail.com",
      text: "Edit Name",
      name: global.movieWatch.name
    };
  }

  componentDidMount() {
    const { currentUser } = firebase.auth();
    this.setState({ currentUser });
  }

  deleteAccount() {
    var user = firebase.auth().currentUser;
    user
      .delete()
      .then(function() {
        signOutUser();
      })
      .catch(function(error) {
        // An error happened.
      });
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
  updateName(text) {
    this.setState({ name: value });
    global.movieWatch.name = text;
  }
  updatePassword(text) {
    this.setState({ password: text });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header} />
        <Image
          style={styles.avatar}
          source={{
            uri: "https://bootdey.com/img/Content/avatar/avatar6.png"
          }}
        />
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>{this.state.name}</Text>
            <Text style={styles.info}>{this.state.email}</Text>
            {/*  <Text style={styles.description}>
              Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum
              electram expetendis, omittam deseruisse consequuntur ius an,
            </Text> */}
            <TextInput
              style={{
                height: 45,
                width: 300,
                borderColor: "gray",
                borderWidth: 1,
                marginVertical: 10
              }}
              onChangeText={value => this.setState({ name: value })}
              // value={this.state.text}

              placeholder="Edit Name"
            />
            <TextInput
              style={{
                height: 45,
                width: 300,
                borderColor: "gray",
                borderWidth: 1,
                marginVertical: 10
              }}
              //  onChangeText={text => this.setState({ text })}
              //  value={this.state.text}

              secureTextEntry={true}
              placeholder="Change password"
            />

            <TouchableOpacity
              style={[styles.buttonContainer, styles.deleteButton]}
              onPress={() => this.deleteAccount}
            >
              <Text style={{ color: "#fff" }}>Delete My Account</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.buttonContainer]}
              onPress={() => this.signOutUser()}
            >
              <Text style={{ color: "#fff" }}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#2F55C0",
    height: 200
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 130
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600"
  },
  body: {
    marginTop: 40
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600"
  },
  info: {
    fontSize: 16,
    color: "#2F55C0",
    marginTop: 10
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: "center"
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 300,
    color: "white",
    //borderRadius: 30,

    backgroundColor: "#00BFFF"
  },
  deleteButton: {
    backgroundColor: "red"
  },
  logoutButton: {
    backgroundColor: "#2F55C0"
  }
});
