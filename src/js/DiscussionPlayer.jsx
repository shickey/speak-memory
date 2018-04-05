import React from 'react';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import { compose } from 'redux';
import firebase from 'firebase';
import { firebaseConnect, getVal } from 'react-redux-firebase';

import VideoPlayer from './VideoPlayer';
import Recorder from './Recorder';

class DiscussionPlayer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentVideoIdx: null,
      replying: false
    };
    this.avatarClicked = this.avatarClicked.bind(this);
    this.onVideoEnd = this.onVideoEnd.bind(this);
    this.initiateReply = this.initiateReply.bind(this);
    this.endReply = this.endReply.bind(this);
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

  initiateReply() {
    this.setState({
      currentVideoIdx: null,
      replying: true
    })
  }

  endReply() {
    this.setState({
      replying: false
    });
  }

  render() {

    if (!this.props.discussion) { return null; }

    var avatars = [];

    var entries = Object.values(this.props.discussion.entries)

    if (!this.state.replying) { // @TODO: This `if` is really only here to prevent the avatars from appearing over top of the modal. Kind of hack. Remove eventually
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

      // Reply button
      avatars.push(
        <div className="player-avatar" key="reply">
          <img onClick={this.initiateReply} src="img/add.svg" />
        </div>
      );
    }
    

    return (
      <div className="player-container">
        <VideoPlayer videoInfo={this.state.currentVideoIdx !== null ? entries[this.state.currentVideoIdx] : null } onVideoEnd={() => this.onVideoEnd()} />
        <div className="avatars-container">
          {avatars}
          <div className={ this.state.currentVideoIdx !== null ? 'avatars-line playing' : 'avatars-line'} ></div>
        </div>
        <ReactModal isOpen={this.state.replying} className="modal" overlayClassName="modal-overlay">
          <Recorder discussionId={this.props.match.params.discussionId} onUploadSuccess={this.endReply} onRequestDismiss={this.endReply} />
        </ReactModal>
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
