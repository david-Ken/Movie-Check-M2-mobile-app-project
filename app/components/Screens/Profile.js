import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
  Dimensions,
  ActivityIndicator
} from "react-native";
import { Avatar, Badge, Icon, withBadge } from "react-native-elements";
import { movies } from "./data";
import { getDatas, initializeEmptyArray } from "./data";

const { height, width } = Dimensions.get("window");

import MoviePoster from "./MoviePoster";

const apiUrl =
  "https://api.themoviedb.org/3/discover/movie?api_key=96e53b76cf1cedd470c0a21126e12d42&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2018";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      apidata: initializeEmptyArray(20),
      dataSource: movies
    };
  }
  componentDidMount = () => {
    var a = 0;
    for (let i = 1; i <= 20; i++) {
      getDatas(i, 2018).then(data => {
        for (let j = 0; j < 20; j++) {
          this.state.apidata[a] = data.results[j];
          a++;
        }
      });
    }
    this.setState({
      apidata: this.state.apidata,
      isLoading: false
    });
  };

  render() {
    console.log(this.state.apidata);
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

            {/*       {this.state.dataSource.map((movie, index) => (
              <MoviePoster movie={movie} onOpen={this.openMovie} key={index} />
            ))} */}
            <FlatList
              horizontal={false}
              numColumns={2}
              data={this.state.apidata}
              //   keyExtractor={item => item.id}
              renderItem={({ item, separators }) => (
                <Text>
                  {item.title}
                  {"\n"}
                </Text>
              )}
            />
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
