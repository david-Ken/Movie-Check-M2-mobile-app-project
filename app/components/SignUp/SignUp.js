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

export default class SignUp extends Component {
  state = { email: "", password: "", errorMessage: null };

  //Signing a user up
  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate("Main"))
      .catch(error => this.setState({ errorMessage: error.message }));
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <KeyboardAvoidingView style={{ flex: 1 }} enabled>
          <TouchableWithoutFeedback
            style={{ flex: 1 }}
            onPress={Keyboard.dismiss}
          >
            <View style={styles.container}>
              <Image
                style={{
                  width: 280,
                  height: 230,
                  borderColor: "#dddddd"
                }}
                source={require("../../assets/Logo/logo.jpg")}
              />
              <Text>Sign Up</Text>
              {this.state.errorMessage && (
                <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
              )}

              <TextInput
                placeholder="Email"
                placeholderTextColor="white"
                autoCapitalize="none"
                style={styles.textInput}
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
              />

              <TextInput
                secureTextEntry
                placeholder="Password"
                placeholderTextColor="white"
                autoCapitalize="none"
                style={styles.textInput}
                onChangeText={password => this.setState({ password })}
                value={this.state.password}
              />

              {/*     <Button title="Sign Up" onPress={this.handleSignUp} />

        <Button
          title="Already have an account? Login"
          onPress={() => this.props.navigation.navigate("Login")}
        /> */}
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={this.handleSignUp}
              >
                <Text style={styles.buttonText}>SIGN UP</Text>
              </TouchableOpacity>
              {/*         <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this.handleSignUp}
        >
          <Text
            style={styles.buttonText}
            onPress={() => this.props.navigation.navigate("Login")}
          >
            Already have an account? Login
          </Text>
        </TouchableOpacity> */}
              <Text
                style={{ color: "white", fontSize: 17 }}
                onPress={() => this.props.navigation.navigate("Login")}
              >
                Already have an account ?{"  "}
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    textDecorationLine: "underline"
                  }}
                >
                  Login
                </Text>
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#fff"
    backgroundColor: "#102030"
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
    color: "#fff",
    marginBottom: 50
  },
  buttonText: {
    textAlign: "center",
    color: "rgb(32,53,70)",
    fontWeight: "bold",
    fontSize: 18,
    paddingTop: 5,
    color: "#fff"
  }
});
