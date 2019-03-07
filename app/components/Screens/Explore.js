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
  TouchableOpacity,
  Image,
  Dimensions
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Category from "./Explore/Category";
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
                marginTop: Platform.OS == "android" ? 30 : null,
                marginBottom: Platform.OS == "android" ? 30 : null
              }}
            >
              <Icon name="ios-search" size={20} style={{ paddingTop: 13 }} />
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="Search For Movies"
                placeholderTextColor="grey"
                style={{ flex: 1, fontWeigth: "700", backgroundColor: "white" }}
              />
            </View>
            {/* end : search bar  */}
            {/*start TAGS: fix ui problem here*
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
            {end TAG : FIX issu here*/}
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
                  {/* Movies per category */}
                  {/*     <Category
                    imageUri={require("../../assets/Posters/0.jpg")}
                    name="Action"
                  />
                  <Category
                    imageUri={require("../../assets/Posters/0.jpg")}
                    name="Adventure"
                  />
                  <Category
                    imageUri={require("../../assets/Posters/0.jpg")}
                    name="Animation"
                  />
                  <Category
                    imageUri={require("../../assets/Posters/0.jpg")}
                    name="Comedy"
                  />
                  <Category
                    imageUri={require("../../assets/Posters/0.jpg")}
                    name="Crime"
                  />

                  <Category
                    imageUri={require("../../assets/Posters/0.jpg")}
                    name="Documentary"
                  />
                  <Category
                    imageUri={require("../../assets/Posters/0.jpg")}
                    name="Drama"
                  />
                  <Category
                    imageUri={require("../../assets/Posters/0.jpg")}
                    name="Family"
                  />
                  <Category
                    imageUri={require("../../assets/Posters/0.jpg")}
                    name="Fantasy"
                  />
                  <Category
                    imageUri={require("../../assets/Posters/0.jpg")}
                    name="History"
                  />
                  <Category
                    imageUri={require("../../assets/Posters/0.jpg")}
                    name="Horror"
                  />
                  <Category
                    imageUri={require("../../assets/Posters/0.jpg")}
                    name="Music"
                  />
                  <Category
                    imageUri={require("../../assets/Posters/0.jpg")}
                    name="Mystery"
                  />
                  <Category
                    imageUri={require("../../assets/Posters/0.jpg")}
                    name="Romance"
                  />
                  <Category
                    imageUri={require("../../assets/Posters/0.jpg")}
                    name="Sci-fi"
                  />
                  <Category
                    imageUri={require("../../assets/Posters/0.jpg")}
                    name="TV Movie"
                  />
                  <Category
                    imageUri={require("../../assets/Posters/0.jpg")}
                    name="Thriller"
                  />
                  <Category
                    imageUri={require("../../assets/Posters/0.jpg")}
                    name="War"
                  />
                  <Category
                    imageUri={require("../../assets/Posters/0.jpg")}
                    name="Western"
                  /> */}

                  <TouchableOpacity>
                    <Category
                      imageUri={require("../../assets/Posters/0.jpg")}
                      name="Comedy"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Category
                      imageUri={require("../../assets/Posters/1.jpg")}
                      name="Sci-fi"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Category
                      imageUri={require("../../assets/Posters/2.jpg")}
                      name="Horror"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Category
                      imageUri={require("../../assets/Posters/3.jpg")}
                      name="Romance"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Category
                      imageUri={require("../../assets/Posters/4.jpg")}
                      name="Action"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Category
                      imageUri={require("../../assets/Posters/14.jpg")}
                      name="Fantasy"
                    />
                  </TouchableOpacity>
                </ScrollView>
              </View>
              {/* end : CATEGORY  */}
              {/* start : big image section  */}
              <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: "700" }}>
                  Introducing Trailers Plus
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

            {/* start : Most popluar movies  */}
            <ScrollView scrollEventThrottle={16}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: "white",
                  paddingTop: 20,
                  marginTop: 20
                }}
              >
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: "700",
                    paddingHorizontal: 20
                  }}
                >
                  Most popular movies
                </Text>
                <View style={{ height: 220, marginTop: 20 }}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    <TouchableOpacity>
                      <Category
                        imageUri={require("../../assets/Posters/19.jpg")}
                        name="Comedy"
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Category
                        imageUri={require("../../assets/Posters/18.jpg")}
                        name="Sci-fi"
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Category
                        imageUri={require("../../assets/Posters/15.jpg")}
                        name="Horror"
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Category
                        imageUri={require("../../assets/Posters/3.jpg")}
                        name="Romance"
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Category
                        imageUri={require("../../assets/Posters/4.jpg")}
                        name="Action"
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Category
                        imageUri={require("../../assets/Posters/14.jpg")}
                        name="Fantasy"
                      />
                    </TouchableOpacity>
                  </ScrollView>
                </View>
              </View>
            </ScrollView>
            {/* end : Most popluar movies  */}

            {/* start : the best movies from 2018 */}
            <ScrollView scrollEventThrottle={16}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: "white",
                  paddingTop: 20,
                  marginTop: 20
                }}
              >
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: "700",
                    paddingHorizontal: 20
                  }}
                >
                  The best movies from 2018
                </Text>
                <View style={{ height: 220, marginTop: 20 }}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={true}
                  >
                    <TouchableOpacity>
                      <Category
                        imageUri={require("../../assets/Posters/22.jpg")}
                        name="Action"
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Category
                        imageUri={require("../../assets/Posters/21.jpg")}
                        name="Fantasy"
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Category
                        imageUri={require("../../assets/Posters/20.jpg")}
                        name="Sci-fi"
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Category
                        imageUri={require("../../assets/Posters/0.jpg")}
                        name="Comedy"
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Category
                        imageUri={require("../../assets/Posters/2.jpg")}
                        name="Horror"
                      />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Category
                        imageUri={require("../../assets/Posters/3.jpg")}
                        name="Romance"
                      />
                    </TouchableOpacity>
                  </ScrollView>
                </View>
              </View>
            </ScrollView>
            {/* end : the best movies from 2018 */}
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
