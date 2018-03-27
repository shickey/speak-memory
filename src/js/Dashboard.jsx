import React from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux'
import firebase from 'firebase';
import { firebaseConnect, getVal } from 'react-redux-firebase'
import { Link } from 'react-router-dom'

class Dashboard extends React.Component {

  render() {

    if (!this.props.discussions) { return null; }

    var discussionCells = [];
    for (var discussionId in this.props.discussions) {
      var discussion = this.props.discussions[discussionId];
      var firstEntry = Object.values(discussion.entries)[0];

      discussionCells.push(
        <div className="discussion-cell" key={discussionId}>
          <div className="discussion-cell-inner">
            <div className="discussion-cell-title">
              <Link to={`/discussion/${discussionId}`}>
                <h3>{discussion.title}</h3>
              </Link>
            </div>
            <div className="discussion-cell-content">
              {discussion.content}
            </div>
            <div className="discussion-cell-footer">
              <img src={firstEntry.avatarUrl} />
              <span>posted by {firstEntry.author}</span>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div>
        <div className="discussions-list">
          <h2>Discussions</h2>
          <div className="discussions-list-content">
            {discussionCells}
          </div>
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state, props) => {
  return {
    discussions: state.firebase.data.discussions
  }
};

export default compose(
  firebaseConnect((props) => {
    return [
      `discussions`
    ]
  }),
  connect(mapStateToProps)
)(Dashboard);
