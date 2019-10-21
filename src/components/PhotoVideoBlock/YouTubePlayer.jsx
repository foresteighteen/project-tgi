import React from 'react';
import YouTube from 'react-youtube';
 
class YouTubePlayer extends React.Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
 
    return (
      <YouTube
        videoId={this.props.video}
        opts={opts}
        onReady={this._play}
        className={'yt-container'} 
      />
    );
  }
  _play(event){
    event.target.playVideo();
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default YouTubePlayer;
