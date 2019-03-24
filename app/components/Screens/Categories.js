import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from "react-native";
import { Icon, Header } from "react-native-elements";

class Categories extends Component {
  constructor() {
    super();
    this.state = {
      genres: [
        {
          id: 28,
          name: "Action"
        },
        {
          id: 12,
          name: "Adventure"
        },
        {
          id: 16,
          name: "Animation"
        },
        {
          id: 35,
          name: "Comedy"
        },
        {
          id: 80,
          name: "Crime"
        },
        {
          id: 99,
          name: "Documentary"
        },
        {
          id: 18,
          name: "Drama"
        },
        {
          id: 10751,
          name: "Family"
        },
        {
          id: 14,
          name: "Fantasy"
        },
        {
          id: 36,
          name: "History"
        },
        {
          id: 27,
          name: "Horror"
        },
        {
          id: 10402,
          name: "Music"
        },
        {
          id: 9648,
          name: "Mystery"
        },
        {
          id: 10749,
          name: "Romance"
        },
        {
          id: 878,
          name: "Science Fiction"
        },
        {
          id: 10770,
          name: "TV Movie"
        },
        {
          id: 53,
          name: "Thriller"
        },
        {
          id: 10752,
          name: "War"
        },
        {
          id: 37,
          name: "Western"
        }
      ]
    };
  }

  componentDidMount = () => {};

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={StyleSheet.container}>
        <Header
          leftComponent={{ icon: "arrow-back", color: "#fff" }}
          centerComponent={{
            text: "CATEGORY",
            style: { color: "#fff", fontSize: 20 }
          }}
          rightComponent={{ icon: "videocam", color: "#fff" }}
        />
        <FlatList
          style={{ margin: 10 }}
          horizontal={false}
          data={this.state.genres}
          renderItem={({ item, separators }) => (
            <TouchableOpacity
              onPress={() => navigate("MovieByCategory", { category: item })}
              id={item.id}
            >
              <View
                style={{
                  margin: 5,
                  padding: 15,
                  borderWidth: 1,
                  borderRadius: 2,
                  borderColor: "#ddd",
                  borderBottomWidth: 0,
                  shadowColor: "#000",
                  shadowOffset: { width: 2, height: 2 },
                  shadowOpacity: 0.8,
                  shadowRadius: 2,
                  elevation: 1
                }}
              >
                <Text style={{ textAlign: "center", fontSize: 20 }}>
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
