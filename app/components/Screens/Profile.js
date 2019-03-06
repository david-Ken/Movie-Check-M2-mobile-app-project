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
  FlatList,
  Image,
  Dimensions,
  ActivityIndicator
} from "react-native";
import { Avatar, Badge, Icon, withBadge } from "react-native-elements";
import { movies } from "./call";

const { height, width } = Dimensions.get("window");

import MoviePoster from "./MoviePoster";

const apiUrl =
  "https://api.themoviedb.org/3/discover/movie?api_key=96e53b76cf1cedd470c0a21126e12d42&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2018";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      dataSource: movies /*,
      dataSource: multipleFetch(10, 2018).then(() => {
        this.setState({ isLoading: false });
      })*/
    };
  }
  /*
    async function multipleFetch(numberOfPage, year) {
      let temp = [];

      for (var i = 1; i < numberOfPage; i++) {
        var apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=96e53b76cf1cedd470c0a21126e12d42&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${i}&year=${year}`;

        await fetch(apiUrl)
          .then(response => response.json())
          .then(responseJson => {
            temp.push(responseJson.results);
            // console.log(responseJson);
          })
          .catch(error => {
            console.error(error);
          });
      }
      this.setState({ dataSource: temp.flat() });

      return temp;
    }
  }


  componentDidMount() {
       return fetch(apiUrl)
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.results
          },
          function() {}
        );
      })
      .catch(error => {
        console.error(error);
      });
  }
*/
  render() {
    if (this.state.isLoading) {
      return (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator size="large" />
        </View>
      );
    } else {
      return (
        <View style={StyleSheet.container}>
          <View
            style={{
              backgroundColor: "blue",
              borderBottomWidth: 1,
              borderBottomColor: "#dddddd",
              height: 100
            }}
          >
            <Image
              source={{
                uri: "https://randomuser.me/api/portraits/men/41.jpg"
              }}
              style={{
                width: 100,
                height: 100,
                borderWidth: 5,
                borderRadius: 100,
                borderColor: "white",
                marginHorizontal: width / 2 - 50
              }}
            />
          </View>

          <ScrollView>
            {/*  {this.state.dataSource.map((movie, index) => (
              <Text>{movie.title}</Text>
            ))} */}

            {this.state.dataSource.map((movie, index) => (
              <MoviePoster movie={movie} onOpen={this.openMovie} key={index} />
            ))}
          </ScrollView>
        </View>
      );
    }
  }
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: "center",
    //justifyContent: "center"
  }
});
