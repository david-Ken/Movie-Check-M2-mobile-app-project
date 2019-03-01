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
class Categories extends Component {
  render() {
    return (
      <View style={StyleSheet.container}>
        <View
          style={{
            heigth: this.animatedHeaderHeight,
            backgroundColor: "White",
            borderBottomWidth: 1,
            borderBottomColor: "#dddddd"
          }}
        >
          {/* start : category search bar  */}
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
            <Icon name="ios-search" size={20} style={{ paddingTop: 13 }} />
            <TextInput
              underlineColorAndroid="transparent"
              placeholder="Categories"
              placeholderTextColor="grey"
              style={{
                flex: 1,
                fontWeigth: "700",
                backgroundColor: "white"
              }}
            />
          </View>
          {/* end : category search bar  */}
          {/* start : category list  */}
          {/* start : two section image  */}
          <ScrollView scrollEventThrottle={16}>
            <View style={{ marginTop: 40 }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "700",
                  paddingHorizontal: 20
                }}
              >
                Find Movies by category
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
                <Home width={width} type="Action" categoryId={28} />
                <Home width={width} type="Adventure" categoryId={12} />
                <Home width={width} type="Animation" categoryId={16} />
                <Home width={width} type="Comedy" categoryId={35} />
                <Home width={width} type="Crime" categoryId={80} />
                <Home width={width} type="Documentary" categoryId={99} />
                <Home width={width} type="Drama" categoryId={18} />
                <Home width={width} type="Family" categoryId={10751} />
                <Home width={width} type="Fantasy" categoryId={14} />
                <Home width={width} type="History" categoryId={36} />
                <Home width={width} type="Horror" categoryId={27} />
                <Home width={width} type="Music" categoryId={10402} />
                <Home width={width} type="Mystery" categoryId={9648} />
                <Home width={width} type="Romance" categoryId={10749} />
                <Home width={width} type="Science Fiction" categoryId={878} />
                <Home width={width} type="TV Movie" categoryId={10770} />
                <Home width={width} type="Thriller" categoryId={53} />
                <Home width={width} type="War" categoryId={10752} />
                <Home width={width} type="Western" categoryId={37} />
              </View>
            </View>
          </ScrollView>
          {/* end : two section image  */}

          {/* end : category list */}
        </View>
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
