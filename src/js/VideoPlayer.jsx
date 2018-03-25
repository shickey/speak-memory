import React from 'react';

class VideoPlayer extends React.Component {

  shouldComponentUpdate(newProps) {
    this.videoElement.src = newProps.videoSrc;
    this.videoElement.play();
    return false;
  }

  componentDidMount() {
    this.videoElement.addEventListener('ended', this.props.onVideoEnd)
  }

  render() {

    return (
      <div className="player">
        <video src={this.props.videoSrc} ref={ (element) => this.videoElement = element }></video>
      </div>
    );
  }

}

export default VideoPlayer;
