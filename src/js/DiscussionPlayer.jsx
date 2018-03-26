import React from 'react';
import VideoPlayer from './VideoPlayer';

import firebase from 'firebase';

const data = [
  {
    id: 1,
    author: 'Gustaaf Gunnhildr',
    avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-0.png?alt=media&token=0fbd28e7-5641-4bc7-be4f-62471f2be63e',
    videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-1.webm?alt=media&token=4647daa5-8443-46ae-8339-9198d55fe3bc'
  },
  {
    id: 2,
    author: 'Radha Manisha',
    avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-7.png?alt=media&token=8ba5a195-527e-4dd1-ad87-c0ecadb0191b',
    videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-2.webm?alt=media&token=295b87c4-ff96-4685-983d-22a880c9a7d6'
  },
  {
    id: 3,
    author: 'Branda Rajesh',
    avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-18.png?alt=media&token=14e3aae6-823a-4a1e-8df6-1df168b4d6',
    videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-3.webm?alt=media&token=4d758ed9-a4ac-49da-8bcd-26a1e6b1abd2'
  },
  {
    id: 4,
    author: 'Vassiliki Aucaman',
    avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-1.png?alt=media&token=bc662af1-a548-491d-9597-3f0cea6e90df',
    videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-4.webm?alt=media&token=b977fa29-760c-45bd-ab0f-874c300b711d'
  },
  {
    id: 5,
    author: 'Sikke Fflur',
    avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-22.png?alt=media&token=b62f66a4-0587-4c9d-986d-f085b276fb1b',
    videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-5.webm?alt=media&token=5b17d816-3e4e-4f46-a002-f01a38311751'
  },
  {
    id: 6,
    author: 'Deepti Jonas',
    avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-16.png?alt=media&token=00b6b6e9-3680-4b62-8b33-c19a91fa9347',
    videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-6.webm?alt=media&token=13ece841-3ed7-4e00-9a40-963b8e78ec9c'
  },
  {
    id: 7,
    author: 'Omolara Cecilia',
    avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-11.png?alt=media&token=53820c15-c450-48a2-8ff5-637af10d465d',
    videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-7.webm?alt=media&token=6751ef45-0ff2-4d9d-8a54-ea897333dd47'
  },
  {
    id: 8,
    author: 'Valentine Eunike',
    avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-19.png?alt=media&token=0297c63a-7806-4048-8248-77b212b79b80',
    videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-8.webm?alt=media&token=9f6bac19-8535-419a-9032-d5300898cec8'
  },
  {
    id: 9,
    author: 'Sigimund Urban',
    avatarUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/avatars%2Fuser-2.png?alt=media&token=81d4e438-5b14-402d-829f-e5e3124f6a13',
    videoUrl: 'https://firebasestorage.googleapis.com/v0/b/speak-memory.appspot.com/o/videos%2Fbetterwatchout-9.webm?alt=media&token=2df98d52-0ae0-42a1-ae9f-46e4a49b720a'
  }
];

class DiscussionPlayer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentVideoIdx: null
    };
    this.avatarClicked = this.avatarClicked.bind(this);
    this.onVideoEnd = this.onVideoEnd.bind(this);

    // var ref = firebase.storage().ref();
    // data.forEach( d => {
    //   ref.child('videos/' + d.file).getDownloadURL().then( (url) => {
    //     console.log(d.id);
    //     console.log(url);
    //   })
    // })

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
          <img onClick={() => this.avatarClicked(idx)} src={d.avatarUrl} />
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
