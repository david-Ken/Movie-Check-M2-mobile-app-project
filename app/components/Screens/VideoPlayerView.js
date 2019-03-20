import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import VideoPlayer from "react-native-video-controls";

class VideoPlayerView extends Component {
  render() {
    return (
      <view style={styles.container}>
        <VideoPlayer
          source={{ uri: "https://vjs.zencdn.net/v/oceans.mp4" }}
          //   title={this.props.title}
          onBlack={() => null}
        />
      </view>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default VideoPlayerView;
