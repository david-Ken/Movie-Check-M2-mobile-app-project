import React, { Component } from "react";
import {
  //Button,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Linking
} from "react-native";
import { Icon, Button, Rating, AirbnbRating } from "react-native-elements";
import MaterialTabs from "react-native-material-tabs";
import VideoPlayerView from "./VideoPlayerView";
import Home from "./Home";
import Category from "./Explore/Category";

import {
  baseImageURL,
  getData,
  movieDatabaseApiKey,
  secondApiKey
} from "./data";

const { width } = Dimensions.get("window");

class Trips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: null,
      actors: null,
      crew: null,
      movie: null,
      recommanded: null,
      selectedTab: 0,
      isloading: true
    };
  }

  setTab = selectedTab => {
    this.setState({ selectedTab });
  };

  // ********************************************* neeed to update props and state **************************************
  getMovieDetails(item, navigate) {
    //reset state before leaving
    this.setState({
      details: null,
      actors: null,
      crew: null,
      trailers: null,
      recommanded: null,
      selectedTab: 0,
      isloading: true,
      movie: null
    });
    navigate("Trips", { id: item });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.id !== this.props.navigation.getParam("id").id) {
      const CURRENT_MOVIE_ID = this.props.navigation.getParam("id").id;

      let CLICKED_MOVIE_URL = `https://api.themoviedb.org/3/movie/
      ${CURRENT_MOVIE_ID} +
      ?api_key=${movieDatabaseApiKey}&language=en-US`;

      let CLICKED_MOVIE_ACTORS_URL = `https://api.themoviedb.org/3/movie/ ${CURRENT_MOVIE_ID}/credits?api_key=${movieDatabaseApiKey}`;

      let RECOMMANDATION_URL = `https://api.themoviedb.org/3/movie/  ${CURRENT_MOVIE_ID}/recommendations?api_key=${movieDatabaseApiKey}&language=en-US&page=1`;

      let TRAILERS = `https://api.themoviedb.org/3/movie/${CURRENT_MOVIE_ID}/videos?api_key=${movieDatabaseApiKey}&language=en-US`;

      this.setState({
        details: null,
        actors: null,
        crew: null,
        movie: null,
        recommanded: null,
        selectedTab: 0,
        isloading: true
      });

      //getting movie by id
      getData(CLICKED_MOVIE_URL).then(data => {
        this.setState({
          details: data
        });
      });

      //getting movie actors by id
      getData(CLICKED_MOVIE_ACTORS_URL).then(data => {
        this.setState({
          actors: data.cast,
          crew: data.crew
        });
      });

      //getting movie recommandation
      getData(RECOMMANDATION_URL).then(data => {
        this.setState({
          recommanded: data.results
        });
      });

      //getting TRAILERS recommandation
      getData(TRAILERS).then(data => {
        this.setState({
          trailers: data.results
        });
      });
    }
  }

  componentDidMount() {
    this.setState({
      details: null,
      actors: null,
      crew: null,
      movie: null,
      recommanded: null,
      selectedTab: 0,
      isloading: true
    });
    //initialization of movie info got from previous component
    this.setState({
      vote_count: this.props.navigation.getParam("id").vote_count,
      id: this.props.navigation.getParam("id").id,
      vote_average: this.props.navigation.getParam("id").vote_average,
      title: this.props.navigation.getParam("id").title,
      popularity: this.props.navigation.getParam("id").popularity,
      poster_path: this.props.navigation.getParam("id").poster_path,
      original_language: this.props.navigation.getParam("id").original_language,
      original_title: this.props.navigation.getParam("id").original_title,
      //  genre: this.props.navigation.getParam("id").genre_ids,
      backdrop_path: this.props.navigation.getParam("id").backdrop_path,
      overview: this.props.navigation.getParam("id").overview,
      release_date: this.props.navigation.getParam("id").release_date
    });

    const CLICKED_MOVIE_URL = `https://api.themoviedb.org/3/movie/
      ${this.props.navigation.getParam("id").id} +
      ?api_key=${movieDatabaseApiKey}&language=en-US`;

    const CLICKED_MOVIE_ACTORS_URL = `https://api.themoviedb.org/3/movie/ ${
      this.props.navigation.getParam("id").id
    }/credits?api_key=${movieDatabaseApiKey}`;

    const RECOMMANDATION_URL = `https://api.themoviedb.org/3/movie/  ${
      this.props.navigation.getParam("id").id
    }/recommendations?api_key=${movieDatabaseApiKey}&language=en-US&page=1`;

    const TRAILERS = `https://api.themoviedb.org/3/movie/${
      this.props.navigation.getParam("id").id
    }/videos?api_key=${movieDatabaseApiKey}&language=en-US`;

    //getting movie by id
    getData(CLICKED_MOVIE_URL).then(data => {
      this.setState({
        details: data
      });
    });

    //getting movie actors by id
    getData(CLICKED_MOVIE_ACTORS_URL).then(data => {
      this.setState({
        actors: data.cast,
        crew: data.crew
      });
    });

    //getting movie recommandation
    getData(RECOMMANDATION_URL).then(data => {
      this.setState({
        recommanded: data.results
      });
    });

    //getting TRAILERS recommandation
    getData(TRAILERS).then(data => {
      this.setState({
        trailers: data.results
      });
    });
  }

  render() {
    const { navigate } = this.props.navigation;

    if (
      this.state.details === null ||
      this.state.actors === null ||
      this.state.crew === null ||
      this.state.trailers === null
    ) {
      return (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <ActivityIndicator size="large" />
        </View>
      );
    } else {
      return (
        <ScrollView scrollEventThrottle={16}>
          <View style={StyleSheet.container}>
            <ImageBackground
              source={{
                uri: baseImageURL + this.state.backdrop_path
              }}
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
                    onPress={() => {
                      this.props.navigation.navigate("Home");
                    }}
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
                      source={{
                        uri: baseImageURL + this.state.poster_path
                      }}
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
                      <Text
                        style={{
                          fontSize: 15,
                          textAlign: "center",
                          fontWeight: "bold"
                        }}
                      >
                        {this.state.title}
                      </Text>
                    </View>

                    <View style={styles.hr} />

                    <View style={styles.movie_info}>
                      <Icon name="home" color="#00aced" />
                      <Text style={styles.movie_text}>
                        {this.state.details.production_companies[0].name}
                      </Text>
                    </View>

                    <View style={styles.movie_info}>
                      <Icon name="language" color="#00aced" />
                      <Text style={styles.movie_text}>
                        {
                          (this.state.original_language = "en"
                            ? "English VO"
                            : this.state.original_language + " VO")
                        }
                      </Text>
                    </View>
                    <View style={styles.movie_info}>
                      <Icon name="date-range" color="#00aced" />
                      <Text style={styles.movie_text}>
                        {this.state.release_date}
                      </Text>
                    </View>
                    <View style={styles.movie_info}>
                      <Icon name="timer" color="#00aced" />
                      <Text style={styles.movie_text}>
                        {(this.state.details.runtime / 60).toFixed(2)} hours
                      </Text>
                    </View>

                    <View style={styles.movie_info}>
                      <Icon name="thumbs-up-down" color="#00aced" />
                      <Text style={styles.movie_text}>
                        {this.state.vote_average} vote average
                      </Text>
                    </View>
                    <View style={styles.movie_info}>
                      <Icon name="computer" color="#00aced" />
                      <Text style={styles.movie_text}>
                        {this.state.details.tagline}
                      </Text>
                    </View>
                    <View style={{ width: "80%" }}>
                      <Button
                        onPress={() =>
                          Linking.openURL(this.state.details.homepage)
                        }
                        title="DETAILS"
                        color="red"
                        accessibilityLabel="more informations on the movies"
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
                  <Text
                    style={{
                      fontWeight: "bold",
                      marginTop: 10,
                      fontSize: 20
                    }}
                  >
                    Overview
                  </Text>
                  <View style={styles.hr} />

                  <FlatList
                    data={this.state.details.genres}
                    horizontal={false}
                    numColumns={4}
                    style={{ marginBottom: 5 }}
                    renderItem={({ item, separators }) => (
                      <View style={{ marginHorizontal: 5 }}>
                        <Button
                          title={item.name}
                          color="red"
                          style={{ width: "50%" }}
                          type="outline"
                        />
                      </View>
                    )}
                  />

                  <Text style={{ textAlign: "justify" }}>
                    {this.state.overview}
                  </Text>
                  <AirbnbRating
                    style={{ margin: 0, padding: 0, fontSize: 14 }}
                    count={5}
                    /*   reviews={[
                      "Terrible",
                      "Bad ",
                      "Okay",
                      "Good",
                      "Great"
                    ]} */
                    defaultRating={11}
                    size={20}
                  />

                  <FlatList
                    style={{ marginTop: 20 }}
                    horizontal={true}
                    data={this.state.recommanded}
                    renderItem={({ item, separators }) => (
                      <TouchableOpacity
                        onPress={() => this.getMovieDetails(item, navigate)}
                      >
                        <Category
                          imageUri={{
                            uri: baseImageURL + item.poster_path
                          }}
                        />
                      </TouchableOpacity>
                    )}
                  />
                </View>
                {/*   end : movie summary  */}
                {/*   end : movie info  */}
              </View>
            ) : this.state.selectedTab === 1 ? (
              <View style={{ marginHorizontal: 20 }}>
                <FlatList
                  data={this.state.actors}
                  horizontal={false}
                  numColumns={2}
                  renderItem={({ item, separators }) => (
                    <TouchableOpacity>
                      <View style={styles.item_wrapper}>
                        <View style={{ flex: 2 }}>
                          <Image
                            source={{
                              uri: baseImageURL + item.profile_path
                            }}
                            style={styles.item}
                          />
                        </View>
                        <View style={styles.actor_text}>
                          <Text
                            style={{
                              textAlign: "left",
                              fontWeight: "bold",
                              fontSize: 16
                            }}
                          >
                            {item.name}
                          </Text>
                          <Text style={{ textAlign: "left", paddingRight: 10 }}>
                            {item.character}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  )}
                />
              </View>
            ) : (
              <FlatList
                style={{ marginHorizontal: 20 }}
                data={this.state.trailers}
                horizontal={false}
                numColumns={1}
                renderItem={({ item, separators }) => (
                  <VideoPlayerView videoId={item.key} />
                )}
              />
            )}
          </View>
        </ScrollView>
      );
    }
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
    paddingHorizontal: 10
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
