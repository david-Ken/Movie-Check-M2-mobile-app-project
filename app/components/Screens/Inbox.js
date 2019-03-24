import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon, Header } from "react-native-elements";
class Inbox extends Component {
  render() {
    return (
      <View style={StyleSheet.container}>
        <Header
          leftComponent={{ icon: "menu", color: "#fff" }}
          centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
          rightComponent={{ icon: "videocam", color: "#fff" }}
        />
        {/* <FlatList
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
        /> */}
      </View>
    );
  }
}

export default Inbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
