import React from 'react';
import VideoPlayer from './VideoPlayer';

const data = [
  {
    id: 1,
    author: 'Gustaaf Gunnhildr',
    avatar: 'user-0.png',
    file: 'betterwatchout-1.webm'
  },
  {
    id: 2,
    author: 'Radha Manisha',
    avatar: 'user-7.png',
    file: 'betterwatchout-2.webm'
  },
  {
    id: 3,
    author: 'Branda Rajesh',
    avatar: 'user-18.png',
    file: 'betterwatchout-3.webm'
  },
  {
    id: 4,
    author: 'Vassiliki Aucaman',
    avatar: 'user-1.png',
    file: 'betterwatchout-4.webm'
  },
  {
    id: 5,
    author: 'Sikke Fflur',
    avatar: 'user-22.png',
    file: 'betterwatchout-5.webm'
  },
  {
    id: 6,
    author: 'Deepti Jonas',
    avatar: 'user-16.png',
    file: 'betterwatchout-6.webm'
  },
  {
    id: 7,
    author: 'Omolara Cecilia',
    avatar: 'user-11.png',
    file: 'betterwatchout-7.webm'
  },
  {
    id: 8,
    author: 'Valentine Eunike',
    avatar: 'user-19.png',
    file: 'betterwatchout-8.webm'
  },
  {
    id: 9,
    author: 'Sigimund Urban',
    avatar: 'user-2.png',
    file: 'betterwatchout-9.webm'
  }
];

class DiscussionPlayer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentVideoIdx: null
    }
    this.avatarClicked = this.avatarClicked.bind(this);
    this.onVideoEnd = this.onVideoEnd.bind(this);
  }

  avatarClicked(idx) {
    if (idx === this.state.currentVideoIdx) { return; }
    this.setState({currentVideoIdx: idx});
  }

  onVideoEnd() {
    if (this.state.currentVideoIdx < data.length - 1) {
      this.setState({currentVideoIdx: this.state.currentVideoIdx + 1});
    }
    else {
      this.setState({currentVideoIdx: null});
    }
  }

  render() {

    var avatars = [];
    data.forEach( (d, idx) => {
      var pullClass = '';
      var currentVideoIdx = this.state.currentVideoIdx;
      if (currentVideoIdx !== null) {
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
        <VideoPlayer videoInfo={this.state.currentVideoIdx !== null ? data[this.state.currentVideoIdx] : null } onVideoEnd={() => this.onVideoEnd()} />
        <div className="avatars-container">
          <div className={ this.state.currentVideoIdx !== null ? 'avatars-line playing' : 'avatars-line'} ></div>
          {avatars}
        </div>
      </div>
    );
  }

}

export default DiscussionPlayer;
