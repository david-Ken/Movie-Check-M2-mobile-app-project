import React, { Component } from "react";
import { StyleSheet } from "react-native";
import YouTube from "react-native-youtube";

class VideoPlayerView extends Component {
  render() {
    return (
      <YouTube
        style={styles.youtubeContainer}
        apiKey="AIzaSyCYn-KfJL-B5ri2uQhimzd1Bj9U78GYqlQ"
        videoId={this.props.videoId}
        playlistId={this.props.playlistId}
        // play={false}
        fullscreen={false}
        // loop={true}
        onReady={e => this.setState({ isReady: true })}
        onChangeState={e => this.setState({ status: e.state })}
        onChangeQuality={e => this.setState({ quality: e.quality })}
        onError={e => this.setState({ error: e.error })}
        style={{ alignSelf: "stretch", height: 300, marginVertical: 10 }}
      />
    );
  }
}
//videoId="Y_JGZTlUbZg"
//https://www.youtube.com/watch?v=f6RDB2uYMqU&list=PL1DD10E84B9B08A35
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  youtubeContainer: {
    borderRadius: 0.5
  }
});

export default VideoPlayerView;
