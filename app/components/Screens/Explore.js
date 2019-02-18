import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Category from "./Explore/Category";
import Home from "./Explore/Home";
import Tags from "./Explore/Tags";

const { height, width } = Dimensions.get("window");
class Explore extends Component {
  componentWillMount() {
    this.startHeaderHeight = 80;
    if (Platform.OS == "android") {
      this.startHeaderHeight = 100 + StatusBar.currentHeigth;
      this.endHeaderHeight = 70 + StatusBar.currentHeigth;
    }
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              heigth: this.animatedHeaderHeight,
              backgroundColor: "White",
              borderBottomWidth: 1,
              borderBottomColor: "#dddddd"
            }}
          >
            {/* start : search bar  */}
            <View
              style={{
                flexDirection: "row",
                padding: 10,
                backgroundColor: "white",
                marginHorizontal: 20,
                shadowOffset: { width: 0, heigth: 0 },
                shadowOpacity: 0.2,
                elevation: 1,
                marginTop: Platform.OS == "android" ? 30 : null
              }}
            >
              <Icon name="ios-search" size={20} />
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="Search For Movies"
                placeholderTextColor="grey"
                style={{ flex: 1, fontWeigth: "700", backgroundColor: "white" }}
              />
            </View>
            {/* end : search bar  */}
            {/*start TAGS: fix ui problem here*/}
            <View
              style={{
                flexDirection: "row",
                marginHorizontal: 20,
                position: "relative",
                top: 20
              }}
            >
              <View
                style={{
                  minHeight: 20,
                  minWidth: 40,
                  padding: 5,
                  backgroundColor: "white",
                  borderColor: "#dddddd",
                  borderWidth: 0.2,
                  borderRadius: 1
                }}
              >
                <Text
                  style={{
                    fontWeight: "700",
                    fontSize: 10
                  }}
                >
                  Guest
                </Text>
              </View>
              <View
                style={{
                  minHeight: 20,
                  minWidth: 40,
                  padding: 5,
                  backgroundColor: "white",
                  borderColor: "#dddddd",
                  borderWidth: 0.2,
                  borderRadius: 1
                }}
              >
                <Text
                  style={{
                    fontWeight: "700",
                    fontSize: 10
                  }}
                >
                  Dates
                </Text>
              </View>
            </View>
            {/*end TAG : FIX issu here*/}
          </View>

          <ScrollView scrollEventThrottle={16}>
            <View style={{ flex: 1, backgroundColor: "white", paddingTop: 20 }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "700",
                  paddingHorizontal: 20
                }}
              >
                Want to discover movies, David ?
              </Text>
              {/* start : CATEGORY  */}
              <View style={{ height: 220, marginTop: 20 }}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <Category
                    imageUri={require("../../assets/Posters/0.jpg")}
                    name="Comedy"
                  />
                  <Category
                    imageUri={require("../../assets/Posters/1.jpg")}
                    name="Sci-fi"
                  />
                  <Category
                    imageUri={require("../../assets/Posters/2.jpg")}
                    name="Horror"
                  />
                  <Category
                    imageUri={require("../../assets/Posters/3.jpg")}
                    name="Romance"
                  />
                  <Category
                    imageUri={require("../../assets/Posters/4.jpg")}
                    name="Action"
                  />
                  <Category
                    imageUri={require("../../assets/Posters/14.jpg")}
                    name="Fantasy"
                  />
                </ScrollView>
              </View>
              {/* end : CATEGORY  */}
              {/* start : big image section  */}
              <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: "700" }}>
                  Introducing Airbnb Plus
                </Text>
                <Text style={{ fontWeight: "100", marginTop: 10 }}>
                  Be the first one to see latest movies trailers & information
                </Text>
                <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                  <Image
                    style={{
                      flex: 1,
                      width: null,
                      height: null,
                      resizeMode: "cover",
                      borderRadius: 5,
                      borderWidth: 1,
                      borderColor: "#dddddd",
                      resizeMode: "cover"
                    }}
                    source={require("../../assets/Posters/big.jpg")}
                  />
                </View>
              </View>
              {/* end : big image section  */}
            </View>

            {/* start : two section image  */}
            <View style={{ marginTop: 40 }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "700",
                  paddingHorizontal: 20
                }}
              >
                Home around world
              </Text>
              <View
                style={{
                  marginTop: 20,
                  paddingHorizontal: 20,
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between"
                }}
              >
                <Home
                  width={width}
                  name="The Cozy Place"
                  type="PRIVATE ROOM - 2BEDS"
                  price={82}
                  rating={4}
                />
                <Home
                  width={width}
                  name="The Cozy Place"
                  type="PRIVATE ROOM - 2BEDS"
                  price={82}
                  rating={4}
                />
                <Home
                  width={width}
                  name="The Cozy Place"
                  type="PRIVATE ROOM - 2BEDS"
                  price={82}
                  rating={4}
                />
                <Home
                  width={width}
                  name="The Cozy Place"
                  type="PRIVATE ROOM - 2BEDS"
                  price={82}
                  rating={4}
                />
              </View>
            </View>
            {/* end : two section image  */}
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

export default Explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
