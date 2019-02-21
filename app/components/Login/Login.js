// Login.js
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  StatusBar,
  TextInput,
  SafeAreaView,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import firebase from "react-native-firebase";
import { SocialIcon } from "react-native-elements";

export default class Login extends Component {
  state = { email: "", password: "", errorMessage: null };

  //Logging an already existing user in
  handleLogin = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate("Main"))
      .catch(error => this.setState({ errorMessage: error.message }));
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <KeyboardAvoidingView style={{ flex: 1 }} disabled>
          <TouchableWithoutFeedback
            style={{ flex: 1 }}
            onPress={Keyboard.dismiss}
          >
            <View style={{ flex: 1 }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#102030"
                }}
              >
                <Image
                  style={{
                    width: 180,
                    height: 130,
                    borderColor: "#dddddd"
                  }}
                  source={require("../../assets/Logo/logo.jpg")}
                />
              </View>
              <View style={styles.container}>
                <Text style={{ color: "red" }}>Login</Text>
                {this.state.errorMessage && (
                  <Text style={{ color: "red" }}>
                    {this.state.errorMessage}
                  </Text>
                )}
                <TextInput
                  style={styles.textInput}
                  autoCapitalize="none"
                  placeholder="Email"
                  onChangeText={email => this.setState({ email })}
                  value={this.state.email}
                />
                <TextInput
                  secureTextEntry
                  style={styles.textInput}
                  autoCapitalize="none"
                  placeholder="Password"
                  onChangeText={password => this.setState({ password })}
                  value={this.state.password}
                />
                {/* <Button title="Login" onPress={this.handleLogin} /> 

              <Button
                title="Don't have an account? Sign Up"
                onPress={() => this.props.navigation.navigate("SignUp")}
              /> */}
                <TouchableOpacity
                  style={styles.buttonContainer}
                  onPress={this.handleLogin}
                >
                  <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <Text
                  style={{ marginBottom: 50, marginTop: 10, color: "grey" }}
                >
                  Don't have an account ? Sign Up
                </Text>
                <SocialIcon
                  title="Sign In With Facebook"
                  button
                  type="facebook"
                />

                {/*  <TouchableOpacity
                  style={styles.buttonContainer}
                  onPress={() => this.props.navigation.navigate("SignUp")}
                >
                  <Text style={styles.buttonText}>
                    Don't have an account? Sign Up
                  </Text>
                </TouchableOpacity> */}
                <TouchableOpacity
                  style={styles.socialButtonContainer}
                  onPress={() => this.props.navigation.navigate("SignUp")}
                >
                  <Text style={styles.buttonText}>Sign in with google</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.socialButtonContainer}
                  onPress={() => this.props.navigation.navigate("SignUp")}
                >
                  <Text style={styles.buttonText}>Sign in with Facebook</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center"
  },
  textInput: {
    height: 40,
    width: "90%",
    borderColor: "gray",
    borderWidth: 1,
    // marginTop: 8,
    margin: 10,
    // borderRadius: 20,
    color: "white",
    textAlign: "center",
    fontSize: 18
  },
  buttonContainer: {
    height: 40,
    width: "90%",
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 10,
    //borderRadius: 20,
    // backgroundColor: "#f7c744",
    // backgroundColor: "#F47D08",
    backgroundColor: "#CB960D",
    color: "#fff"
    //marginBottom: 50
  },
  buttonText: {
    textAlign: "center",
    color: "rgb(32,53,70)",
    fontWeight: "bold",
    fontSize: 18,
    paddingTop: 5,
    color: "#fff"
  },
  socialButtonContainer: {
    height: 40,
    width: "90%",
    borderColor: "gray",
    borderWidth: 1,
    // marginTop: 10,
    //borderRadius: 20,
    // backgroundColor: "#f7c744",
    // backgroundColor: "#F47D08",
    backgroundColor: "blue",
    color: "#fff",
    marginBottom: 10
  }
});
