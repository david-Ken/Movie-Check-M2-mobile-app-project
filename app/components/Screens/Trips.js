import React, { Component } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  BackHandler,
  ImageBackground,
  FlatList,
  TouchableOpacity
} from "react-native";
import { Icon } from "react-native-elements";
import MaterialTabs from "react-native-material-tabs";
import VideoPlayerView from "./VideoPlayerView";

const { width } = Dimensions.get("window");

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
        <ImageBackground
          source={require("../../assets//Posters/backdrop.jpg")}
          style={styles.backdropImageView}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              padding: 10
            }}
          >
            <TouchableOpacity>
              <Icon
                name="arrow-back"
                onPress={() => goBack()}
                size={28}
                color="white"
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "flex-end"
            }}
          >
            <MaterialTabs
              items={["Info", "Actors", "Trailers"]}
              selectedIndex={this.state.selectedTab}
              onChange={index => this.setState({ selectedTab: index })}
              barColor="rgba(255,255,255,.1)"
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
                  <Text style={{ fontSize: 15 }}>Informations</Text>
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
                <View style={{ width: "80%" }}>
                  <Button
                    onPress={() => goBack()}
                    title="Purchase"
                    color="red"
                    accessibilityLabel="Learn more about this purple button"
                  />
                </View>
              </View>
            </View>
            {/*   start : movie summary  */}
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                padding: 20
              }}
            >
              <Text style={{ fontWeight: "bold", marginTop: 10, fontSize: 20 }}>
                Overview
              </Text>
              <View style={styles.hr} />
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
          <View style={{ marginHorizontal: 20 }}>
            <FlatList
              data={[
                { title: "Title Text", key: "item1" },
                { title: "Title Text 2", key: "item2" },
                { title: "Title Text", key: "item3" },
                { title: "Title Text", key: "item4" },
                { title: "Title Text", key: "item5" }
              ]}
              horizontal={false}
              numColumns={2}
              renderItem={({ item, separators }) => (
                <TouchableOpacity>
                  <View style={styles.item_wrapper}>
                    <View style={{ flex: 2 }}>
                      <Image
                        source={require("../../assets/Posters/2.jpg")}
                        style={styles.item}
                      />
                    </View>
                    <View style={styles.actor_text}>
                      <Text style={{ textAlign: "left" }}>
                        Brie Larson {"\n\n"}Carol Danvers / Vers / Captain
                        Marvel
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        ) : (
          /*  <View style={{ margin: 20, marginBottom: 40 }}>
            <VideoPlayerView playlistId="PL1DD10E84B9B08A35" />
            <VideoPlayerView playlistId="PL1DD10E84B9B08A35" />
            <VideoPlayerView playlistId="PL1DD10E84B9B08A35" />
            <VideoPlayerView playlistId="PL1DD10E84B9B08A35" />
            <VideoPlayerView playlistId="PL1DD10E84B9B08A35" />
            <VideoPlayerView playlistId="PL1DD10E84B9B08A35" />
          </View> */

          <FlatList
            data={[
              { title: "Title Text", key: "item1" },
              { title: "Title Text 2", key: "item2" },
              { title: "Title Text", key: "item3" },
              { title: "Title Text", key: "item4" },
              { title: "Title Text", key: "item5" }
            ]}
            horizontal={false}
            numColumns={1}
            renderItem={({ item, separators }) => (
              <VideoPlayerView playlistId="PL1DD10E84B9B08A35" />
            )}
          />
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
  },
  item_wrapper: {
    height: 300,
    width: width / 2 - 40,
    marginHorizontal: 10
  },
  item: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: "cover"
  },
  actor_text: { flex: 1, paddingLeft: 40 }
});
