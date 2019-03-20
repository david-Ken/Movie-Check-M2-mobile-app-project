import React, { Component } from "react";
import { StyleSheet } from "react-native";
import YouTube from "react-native-youtube";

class VideoPlayerView extends Component {
  render() {
    return (
      <YouTube
        apiKey="AIzaSyCYn-KfJL-B5ri2uQhimzd1Bj9U78GYqlQ"
        videoId={this.props.videoId} // The YouTube video ID
        //    play={true} // control playback of video with true/false
        fullscreen={false} // control whether the video should play in fullscreen or inline
        //      loop={true} // control whether the video should loop when ended
        onReady={e => this.setState({ isReady: true })}
        onChangeState={e => this.setState({ status: e.state })}
        onChangeQuality={e => this.setState({ quality: e.quality })}
        onError={e => this.setState({ error: e.error })}
        style={{ alignSelf: "stretch", height: 300 }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default VideoPlayerView;
