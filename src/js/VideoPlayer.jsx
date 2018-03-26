import React from 'react';

class VideoPlayer extends React.Component {

  constructor(props) {
    super(props);
    this.onStart = this.onStart.bind(this);
  }

  componentDidMount() {
    this.videoElement.addEventListener('ended', this.props.onVideoEnd);
    this.videoElement.addEventListener('playing', this.onStart);
  }

  onStart() {
    this.overlay.classList.add('showing');
    setTimeout(() => {
      this.overlay.classList.remove('showing');
    }, 4000);
  }

  render() {

    var overlayContent = null;
    if (this.props.videoInfo) {
      var info = this.props.videoInfo;
      overlayContent = (
        <div className="player-overlay-content">
          <img className="player-overlay-avatar" src={info.avatarUrl} />
          <div className="player-overlay-title">{info.author}</div>
        </div>
      );
    }

    return (
      <div className="player">
        <video autoPlay src={this.props.videoInfo ? this.props.videoInfo.videoUrl : ''} ref={ (element) => this.videoElement = element }></video>
        <div className="player-overlay" ref={ (overlay) => this.overlay = overlay }>
          {overlayContent}
        </div>
      </div>
    );
  }

}

export default VideoPlayer;
