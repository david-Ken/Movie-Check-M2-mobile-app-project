import React, { Component } from "react";
import {
  StyleSheet,
  ActivityIndicator,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity
} from "react-native";
import { Icon, Header } from "react-native-elements";
import Category from "./Explore/Category";
import { baseImageURL, getData, movieDatabaseApiKey } from "./data";

class MovieByCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryMovies: null
    };
  }

  //open movie in new screen (movieDetails scren)
  getMovieDetails(item, navigate) {
    this.setState({
      movie: item
    });
    console.log(this.state.movie);
    if (this.state.movie !== null) {
      this.setState({ categoryMovies: null });
      navigate("Trips", { id: item });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.id !== this.props.navigation.getParam("category").id) {
      this.setState({ categoryMovies: null });
      const MOVIE_LIST_BY_CATEGORY_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${movieDatabaseApiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${
        this.props.navigation.getParam("category").id
      }`;

      getData(MOVIE_LIST_BY_CATEGORY_URL).then(data => {
        this.setState({
          categoryMovies: data.results
        });
      });
    }
  }

  componentDidMount = () => {
    const MOVIE_LIST_BY_CATEGORY_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${movieDatabaseApiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${
      this.props.navigation.getParam("category").id
    }
`;
    // retrieve movie for the current category
    getData(MOVIE_LIST_BY_CATEGORY_URL).then(data => {
      this.setState({
        categoryMovies: data.results
      });
      // console.log(this.state.categoryMovies);
    });
  };

  render() {
    if (this.state.categoryMovies === null || this.state.listAppear === true) {
      //console.log(this.state.latest);
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
      const { navigate } = this.props.navigation;
      return (
        <View style={StyleSheet.container}>
          <Header
            centerComponent={{
              text: this.props.navigation.getParam("category").name,
              style: { color: "#fff", fontSize: 20 }
            }}
            rightComponent={{ icon: "videocam", color: "#fff" }}
          />
          <FlatList
            style={{ marginTop: 20 }}
            horizontal={false}
            numColumns={3}
            data={this.state.categoryMovies}
            //   keyExtractor={item => item.id}
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
      );
    }
  }
}

export default MovieByCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10
  }
});
