import React from 'react';
import VideoPlayer from './VideoPlayer';

const data = [
  {
    id: 1,
    author: 'Gustaaf Gunnhildr',
    avatar: 'user-0.png',
    video: 'betterwatchout-1.webm'
  },
  {
    id: 2,
    author: 'Radha Manisha',
    avatar: 'user-7.png',
    video: 'betterwatchout-2.webm'
  },
  {
    id: 3,
    author: 'Branda Rajesh',
    avatar: 'user-18.png',
    video: 'betterwatchout-3.webm'
  },
  {
    id: 4,
    author: 'Vassiliki Aucaman',
    avatar: 'user-1.png',
    video: 'betterwatchout-4.webm'
  },
  {
    id: 5,
    author: 'Sikke Fflur',
    avatar: 'user-22.png',
    video: 'betterwatchout-5.webm'
  },
  {
    id: 6,
    author: 'Deepti Jonas',
    avatar: 'user-16.png',
    video: 'betterwatchout-6.webm'
  },
  {
    id: 7,
    author: 'Omolara Cecilia',
    avatar: 'user-11.png',
    video: 'betterwatchout-7.webm'
  },
  {
    id: 8,
    author: 'Valentine Eunike',
    avatar: 'user-19.png',
    video: 'betterwatchout-8.webm'
  },
  {
    id: 9,
    author: 'Sigimund Urban',
    avatar: 'user-2.png',
    video: 'betterwatchout-9.webm'
  }
];

class DiscussionPlayer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentVideoIdx: -1
    }
    this.avatarClicked = this.avatarClicked.bind(this);
    this.onVideoEnd = this.onVideoEnd.bind(this);
  }

  avatarClicked(idx) {
    this.setState({currentVideoIdx: idx});
  }

  onVideoEnd() {
    if (this.state.currentVideoIdx < data.length - 1) {
      this.setState({currentVideoIdx: this.state.currentVideoIdx + 1});
    }
    else {
      this.setState({currentVideoIdx: -1});
    }
  }

  render() {

    var avatars = [];
    data.forEach( (d, idx) => {
      var pullClass = '';
      var currentVideoIdx = this.state.currentVideoIdx;
      if (currentVideoIdx !== -1) {
        if (idx < currentVideoIdx) {
          pullClass = 'avatar-past';
        }
        else if (idx > currentVideoIdx) {
          pullClass = 'avatar-future';
        }
        else {
          pullClass = 'avatar-now';
        }
      }
      avatars.push(
        <div className={`player-avatar ${pullClass}`} key={d.id}>
          <img onClick={() => this.avatarClicked(idx)} src={'img/' + d.avatar} />
        </div>
      );
    });

    return (
      <div className="player-container">
        <VideoPlayer videoSrc={(this.state.currentVideoIdx === -1 ? '' : 'video/' + data[this.state.currentVideoIdx].video) } onVideoEnd={() => this.onVideoEnd()} />
        <div className="avatars-container">
          {avatars}
        </div>
      </div>
    );
  }

}

export default DiscussionPlayer;
