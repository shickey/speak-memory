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
    if (this.state.currentVideoIdx < this.props.data.length - 1) {
      this.setState({currentVideoIdx: this.state.currentVideoIdx + 1});
    }
    else {
      this.setState({currentVideoIdx: null});
    }
  }

  render() {

    if (!this.props.data) { return null; }

    var avatars = [];

    this.props.data.forEach( (d, idx) => {
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
        <VideoPlayer videoInfo={this.state.currentVideoIdx !== null ? this.props.data[this.state.currentVideoIdx] : null } onVideoEnd={() => this.onVideoEnd()} />
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
    data: (() => {
      // @TODO: Is this reasonable? Or ridiculous?
      //        Most importantly: does it guarantee ordering by timestamp?
      var fbData = getVal(state.firebase, `data/discussions/-L8ZSju-G6FzkaaCOe39`);
      if (fbData) {
        return Object.values(fbData);
      }
      return undefined;
    })()
  }
};

export default compose(
  firebaseConnect((props) => {
    return [
      `discussions/-L8ZSju-G6FzkaaCOe39`
    ]
  }),
  connect(mapStateToProps)
)(DiscussionPlayer);
