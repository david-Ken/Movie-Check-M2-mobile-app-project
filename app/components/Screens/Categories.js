import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  Platform,
  ScrollView,
  TouchableOpacity
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import { movies } from "./data";
import { Profile } from "./Profile";
import { Item } from "./Explore/Item";

class Categories extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: null
    };
  }

  componentDidMount = () => {
    this.setState({
      dataSource: movies
    });
  };

  render() {
    const { navigate } = this.props.navigation;
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

          {/* start : two section category image  */}
          <ScrollView horizontal={false} scrollEventThrottle={16}>
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
                <FlatList
                  horizontal={false}
                  numColumns={2}
                  data={this.state.dataSource}
                  renderItem={({ item, separators }) => (
                    <TouchableOpacity
                      //   onPress={() => this._onPress(item)}
                      onPress={() => navigate("Profile", { name: "Brent" })}
                      onShowUnderlay={separators.highlight}
                      onHideUnderlay={separators.unhighlight}
                    >
                      <Item imageUri={{ uri: item.poster }} name={item.genre} />
                    </TouchableOpacity>
                  )}
                />
                {/* 
                <TouchableOpacity>
                  <Item
                    imageUri={require("../../assets/Posters/14.jpg")}
                    name="Fantasy"
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Item
                    imageUri={require("../../assets/Posters/big1.jpg")}
                    name="Action"
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Item
                    imageUri={require("../../assets/Posters/18.jpg")}
                    name="Comedie"
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Item
                    imageUri={require("../../assets/Posters/10.jpg")}
                    name="Science Fiction"
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Item
                    imageUri={require("../../assets/Posters/14.jpg")}
                    name="Fantasy"
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Item
                    imageUri={require("../../assets/Posters/big1.jpg")}
                    name="Action"
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Item
                    imageUri={require("../../assets/Posters/18.jpg")}
                    name="Comedie"
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Item
                    imageUri={require("../../assets/Posters/10.jpg")}
                    name="Science Fiction"
                  />
                </TouchableOpacity> */}
              </View>
            </View>
          </ScrollView>
          {/* end : two category section image  */}
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
