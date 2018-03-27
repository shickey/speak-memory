import React from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux'
import firebase from 'firebase';
import { firebaseConnect, getVal } from 'react-redux-firebase'

import VideoPlayer from './VideoPlayer';

class DiscussionPlayer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentVideoIdx: null
    };
    this.avatarClicked = this.avatarClicked.bind(this);
    this.onVideoEnd = this.onVideoEnd.bind(this);
  }

  avatarClicked(idx) {
    if (idx === this.state.currentVideoIdx) { return; }
    this.setState({currentVideoIdx: idx});
  }

  onVideoEnd() {
    if (this.state.currentVideoIdx < Object.values(this.props.discussion.entries).length - 1) {
      this.setState({currentVideoIdx: this.state.currentVideoIdx + 1});
    }
    else {
      this.setState({currentVideoIdx: null});
    }
  }

  render() {

    if (!this.props.discussion) { return null; }

    var avatars = [];

    var entries = Object.values(this.props.discussion.entries)

    entries.forEach( (d, idx) => {
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
        <VideoPlayer videoInfo={this.state.currentVideoIdx !== null ? entries[this.state.currentVideoIdx] : null } onVideoEnd={() => this.onVideoEnd()} />
        <div className="avatars-container">
          <div className={ this.state.currentVideoIdx !== null ? 'avatars-line playing' : 'avatars-line'} ></div>
          {avatars}
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state, props) => {
  return {
    discussion: getVal(state.firebase, `data/discussions/${props.match.params.discussionId}`)
  }
};

export default compose(
  firebaseConnect((props) => {
    return [
      `discussions/${props.match.params.discussionId}`
    ]
  }),
  connect(mapStateToProps)
)(DiscussionPlayer);
