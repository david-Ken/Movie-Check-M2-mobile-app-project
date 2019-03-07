import React, { Component } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  BackHandler
} from "react-native";
import { Icon } from "react-native-elements";

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

  render() {
    const { goBack } = this.props.navigation;
    return (
      <View style={StyleSheet.container}>
        <View
          style={{
            width: width,
            height: 200,
            marginBottom: 15
          }}
        >
          <Image
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: "cover"
            }}
            source={require("../../assets//Posters/backdrop.jpg")}
          />
        </View>
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
              <Text style={styles.movie_text}> https://web.whatsapp.com/</Text>
            </View>

            <Button
              onPress={() => goBack()}
              title="Learn More"
              color="red"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
          {/*   end : movie info  */}
        </View>
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
  }
});
