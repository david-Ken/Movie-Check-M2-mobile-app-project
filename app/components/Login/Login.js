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
  constructor(props) {
    super(props);
    this.state = { logoWidth: 180, logoHeight: 130, addMarginBottom: null };
  }

  //Logging an already existing user in
  handleLogin = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate("Main"))
      .catch(error => this.setState({ errorMessage: error.message }));
  };

  increaseLogo = () => {
    this.setState({ logoWidth: 180 });
    this.setState({ logoHeight: 130 });
    this.setState({ addMarginBottom: null });
  };

  reduceLogo = () => {
    this.setState({ logoWidth: 100 });
    this.setState({ logoHeight: 50 });
    this.setState({ addMarginBottom: 120 });
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
                  backgroundColor: "#102030",
                  marginBottom: this.state.addMarginBottom
                }}
              >
                <Image
                  style={{
                    width: this.state.logoWidth,
                    height: this.state.logoHeight,
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
                  onFocus={this.reduceLogo}
                  onBlur={this.increaseLogo}
                />
                <TextInput
                  secureTextEntry
                  style={styles.textInput}
                  autoCapitalize="none"
                  placeholder="Password"
                  onChangeText={password => this.setState({ password })}
                  value={this.state.password}
                  onFocus={this.reduceLogo}
                  onBlur={this.increaseLogo}
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
                  onPress={() => this.props.navigation.navigate("SignUp")}
                  style={{
                    marginTop: 10,
                    color: "grey",
                    fontSize: 17
                  }}
                >
                  Don't have an account ?{"  "}
                  <Text
                    style={{
                      fontWeight: "bold",
                      textDecorationLine: "underline"
                    }}
                  >
                    Sign Up
                  </Text>
                </Text>
                {/* start : Divider with horizontal line */}
                <View style={{ flexDirection: "row", width: 250, margin: 30 }}>
                  <View
                    style={{
                      backgroundColor: "black",
                      height: 1,
                      flex: 1,
                      alignSelf: "center"
                    }}
                  />
                  <Text
                    style={{
                      alignSelf: "center",
                      paddingHorizontal: 5,
                      fontSize: 17
                    }}
                  >
                    Or
                  </Text>
                  <View
                    style={{
                      backgroundColor: "black",
                      height: 1,
                      flex: 1,
                      alignSelf: "center"
                    }}
                  />
                </View>
                {/* end : Divider with horizontal line */}
                <TouchableOpacity
                  style={styles.buttonContainer}
                  onPress={() => this.props.navigation.navigate("SignUp")}
                >
                  <View style={styles.alignLogo}>
                    <Image
                      style={{
                        width: 20,
                        height: 20,
                        margingTop: 15,
                        marginRight: 17
                      }}
                      source={require("../../assets/Icons/google_G_logo.png")}
                    />
                    <Text style={styles.buttonText}>Sign in With Google</Text>
                  </View>
                </TouchableOpacity>

                <SocialIcon
                  style={styles.socialButtonContainer}
                  title="Sign In With Facebook"
                  button
                  component
                  type="facebook"
                />

                {/*  <TouchableOpacity
                  style={styles.buttonContainer}
                  onPress={() => this.props.navigation.navigate("SignUp")}
                >
                  <Text style={styles.buttonText}>
                    Don't have an account? Sign Up
                  </Text>
                </TouchableOpacity> 
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
                </TouchableOpacity>*/}
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
    color: "grey",
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
    color: "#fff",
    fontFamily: "Sans Serif Black",
    fontSize: 15
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
    // backgroundColor: "blue",
    color: "#fff",
    marginBottom: 10,
    borderRadius: 0
  },
  alignLogo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});
