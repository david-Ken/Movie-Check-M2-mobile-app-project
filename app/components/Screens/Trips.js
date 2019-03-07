import React, { Component } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  BackHandler,
  ImageBackground
} from "react-native";
import { Icon } from "react-native-elements";
import MaterialTabs from "react-native-material-tabs";
const { height, width } = Dimensions.get("window");

class Trips extends Component {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  }

  handleBackPress = () => {
    this.goBack(); // works best when the goBack is async
    return true;
  };
  state = {
    selectedTab: 0
  };

  setTab = selectedTab => {
    this.setState({ selectedTab });
  };
  render() {
    const { goBack } = this.props.navigation;
    return (
      <View style={StyleSheet.container}>
        {/*   <View style={styles.backdropImageView}>
          <Image
            style={styles.backdropImage}
            source={require("../../assets//Posters/backdrop.jpg")}
          />
         
        </View> */}
        <ImageBackground
          source={require("../../assets//Posters/backdrop.jpg")}
          style={styles.backdropImageView}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "flex-end"
            }}
          >
            <MaterialTabs
              items={["One", "Two", "Three"]}
              selectedIndex={this.state.selectedTab}
              onChange={index => this.setState({ selectedTab: index })}
              barColor="transparent"
              indicatorColor="red"
              activeTextStyle={styles.tabActiveText}
            />
          </View>
        </ImageBackground>

        {this.state.selectedTab === 0 ? (
          <View>
            <View
              style={{
                flexDirection: "row",
                paddingHorizontal: 15,
                marginBottom: 10
              }}
            >
              {/*   start : backdrop poster */}
              <View
                style={{
                  width: width / 3,
                  height: 200
                }}
              >
                <Image
                  style={{
                    flex: 1,

                    width: null,
                    height: null,
                    resizeMode: "cover"
                  }}
                  source={require("../../assets//Posters/19.jpg")}
                />
              </View>
              {/*   end : backdrop poster */}
              {/*   start : movie info  */}
              <View
                style={{
                  width: width - width / 3,
                  height: 200,
                  paddingHorizontal: 20
                }}
              >
                <View style={styles.movie_info}>
                  <Text>Informations</Text>
                </View>
                <View style={styles.hr} />
                <View style={styles.movie_info}>
                  <Icon name="info" color="#00aced" />
                  <Text style={styles.movie_text}>Informations </Text>
                </View>
                <View style={styles.movie_info}>
                  <Icon name="date-range" color="#00aced" />
                  <Text style={styles.movie_text}> 01-05-2018 </Text>
                </View>
                <View style={styles.movie_info}>
                  <Icon name="euro-symbol" color="#00aced" />
                  <Text style={styles.movie_text}> 6.5 valorisation </Text>
                </View>
                <View style={styles.movie_info}>
                  <Icon name="donut-small" color="#00aced" />
                  <Text style={styles.movie_text}> 4100 votes</Text>
                </View>
                <View style={styles.movie_info}>
                  <Icon name="computer" color="#00aced" />
                  <Text style={styles.movie_text}>
                    https://web.whatsapp.com/
                  </Text>
                </View>

                <Button
                  onPress={() => goBack()}
                  title="Learn More"
                  color="red"
                  accessibilityLabel="Learn more about this purple button"
                />
              </View>
            </View>
            {/*   start : movie summary  */}
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                marginVertical: 10,
                padding: 20
              }}
            >
              <Text style={{ fontWeight: "bold", marginVertical: 10 }}>
                Overview
              </Text>
              <Text style={{ textAlign: "justify" }}>
                A common misconception is that RNFirebase provides social and
                login out of the box. This is somewhat true, it leaves the
                implementation of the login provider up to the user and only
                signs the user in once the provider data has been returned.
              </Text>
            </View>
            {/*   end : movie summary  */}
            {/*   end : movie info  */}
          </View>
        ) : this.state.selectedTab === 1 ? (
          <Text style={{ fontWeight: "bold", marginVertical: 10 }}>
            Two Two
          </Text>
        ) : (
          <Text>Three Three </Text>
        )}
      </View>
    );
  }
}

export default Trips;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  backdropImageView: {
    width: width,
    height: 200,
    marginBottom: 15
  },
  backdropImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover"
  },
  movie_info: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2
  },
  movie_text: { marginHorizontal: 10 },
  hr: {
    borderBottomColor: "#CDCDCD",
    borderBottomWidth: 0.8,
    marginVertical: 10,
    paddingHorizontal: 20
  },
  tabActiveText: {
    fontWeight: "bold"
  }
});
