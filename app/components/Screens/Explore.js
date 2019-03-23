import React, { Component } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  FlatList,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Category from "./Explore/Category";
import Trips from "./Trips";
import VideoPlayerView from "./VideoPlayerView";
import { movies, getMoviesByYear, getData, initializeEmptyArray } from "./data";

// "https://image.tmdb.org/t/p/w500/hEpWvX6Bp79eLxY1kX5ZZJcme5U.jpg"
// "https://image.tmdb.org/t/p/w500/hEpWvX6Bp79eLxY1kX5ZZJcme5U.jpg"
const { width } = Dimensions.get("window");
const baseImageURL = "https://image.tmdb.org/t/p/w500/";
const nowPlayingMovieUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=96e53b76cf1cedd470c0a21126e12d42&language=en-US&page=1`;

class Explore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //selected movie
      movie: null,
      isLoading: true,
      loader1: true,
      loader2: false,
      apidata: initializeEmptyArray(10),
      nowPlayingMovieData: null,
      dataSource: movies
    };
  }

  //open movie in new screen (movieDetails scren)
  getMovieDetails(item, navigate) {
    this.setState({
      movie: item
    });
    console.log(this.state.movie);
    if (this.state.movie !== null) {
      //  this.props.navigation.navigate("Trips", [this.state.movie]);
      // navigate("Trips", [this.state.movie]);
      //navigate("Trips", { id: item.title });
      navigate("Trips", { id: item });
    }
  }

  componentWillMount() {
    this.startHeaderHeight = 80;
    if (Platform.OS == "android") {
      this.startHeaderHeight = 100 + StatusBar.currentHeigth;
      this.endHeaderHeight = 70 + StatusBar.currentHeigth;
    }

    //retrieve movies form 2018 (last year)
    var a = 0;
    for (let i = 1; i <= 10; i++) {
      getMoviesByYear(i, 2018).then(data => {
        for (let j = 0; j < 10; j++) {
          this.state.apidata[a] = data.results[j];
          a++;
        }
      });
    }

    this.setState({
      apidata: this.state.apidata,
      loader1: false
    });

    // retrieve "now playing movies"
    getData(nowPlayingMovieUrl).then(data => {
      this.setState({
        nowPlayingMovieData: data.results,
        loader2: false
      });
    });

    //remove loader if async data are ready
    if ((this.state.loader1 && this.state.loader2) === false) {
      this.setState({
        isLoading: false
      });
      noMore = false;
    }
  }

  render() {
    console.log(this.state.nowPlayingMovieData);
    if (this.state.isLoading) {
      return (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator size="large" />
        </View>
      );
    } else {
      const { navigate } = this.props.navigation;
      const { params } = this.props.navigation.state;
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
                  style={{
                    flex: 1,
                    fontWeigth: "700",
                    backgroundColor: "white"
                  }}
                />
              </View>
              {/* end : search bar  */}
            </View>

            <ScrollView scrollEventThrottle={16}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: "white",
                  color: "white",
                  paddingTop: 20
                }}
              >
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
                  <View
                    style={{
                      width: width - 40,
                      height: 310,
                      marginTop: 20
                    }}
                  >
                    <VideoPlayerView playlistId="PL1DD10E84B9B08A35" />
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
                    Now playing in box office
                  </Text>
                  <FlatList
                    style={{ marginTop: 20 }}
                    horizontal={true}
                    data={this.state.nowPlayingMovieData}
                    renderItem={({ item, separators }) => (
                      <TouchableOpacity
                        onPress={() => this.getMovieDetails(item, navigate)}
                      >
                        <Category
                          imageUri={{
                            uri: baseImageURL + item.poster_path
                          }}
                          name={item.title}
                        />
                      </TouchableOpacity>
                    )}
                  />
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
                </View>
              </ScrollView>
              <FlatList
                style={{ marginTop: 20 }}
                horizontal={true}
                //   numColumns={2}
                data={this.state.apidata}
                //   keyExtractor={item => item.id}
                renderItem={({ item, separators }) => (
                  <TouchableOpacity>
                    <Category
                      imageUri={{
                        uri: baseImageURL + item.poster_path
                      }}
                      name={item.title}
                    />
                  </TouchableOpacity>
                )}
              />

              {/* end : the best movies from 2018 */}
            </ScrollView>
          </View>
        </SafeAreaView>
      );
    }
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
//#1A1A1A background theme
