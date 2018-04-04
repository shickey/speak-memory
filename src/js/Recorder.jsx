import React from 'react';
import RecordRTC from 'recordrtc';

const hasGetUserMedia = !!(navigator.mediaDevices.getUserMedia);

const RecordingStates = {
  WAITING: "WAITING",
  NO_CAMERA: "NO_CAMERA",
  READY: "READY",
  RECORDING: "RECORDING",
  PLAYBACK_READY: "PLAYBACK_READY",
  PLAYBACK_PLAY: "PLAYBACK_PLAY",
  UPLOADING: "UPLOADING",
  UPLOAD_SUCCESS: "UPLOAD_SUCCESS",
  UPLOAD_FAILURE: "UPLOAD_FAILURE"
}

class Recorder extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      recordingState: RecordingStates.WAITING,
      stream: null,
      src: null,
      recordingVideo: null
    }

    this.videoPlaybackReachedEnd = this.videoPlaybackReachedEnd.bind(this);
    this.startRecording = this.startRecording.bind(this);
    this.stopRecording = this.stopRecording.bind(this);
    this.startPlayback = this.startPlayback.bind(this);
    this.stopPlayback = this.stopPlayback.bind(this);
    this.cancelPlayback = this.cancelPlayback.bind(this);
    this.beginUpload = this.beginUpload.bind(this);
    this.uploadSuccessOkay = this.uploadSuccessOkay.bind(this);
    this.uploadFailureCancel = this.uploadFailureCancel.bind(this);
    this.uploadFailureRetry = this.uploadFailureRetry.bind(this);
  }

  componentDidMount() {
    this.setState({
      recordingState: RecordingStates.WAITING
    })
    // Begin camera
    navigator.mediaDevices.getUserMedia({
      audio: true,
      video: { // 4:3 aspect ratio. RIP SD-video.
        width: 600,
        height: 450
      }
    }).then( (stream) => {
      this.setState({ 
        recordingState: RecordingStates.READY,
        stream: stream,
        src: window.URL.createObjectURL(stream) // TODO: Fix warning
      });
    }).catch( (err) => {
      this.setState({
        recordingState: RecordingStates.NO_CAMERA,
        stream: null,
        src: null
      })
    })
  }

  componentWillUnmount() {
    // Stop the camera, if it's on
    if (this.state.stream) {
      this.state.stream.getTracks().forEach( t => t.stop() );
    }
    this.setState({
      recordingState: RecordingStates.WAITING,
      stream: null,
      src: null,
      recordingVideo: null
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.recordingState === RecordingStates.READY) {
      this.videoElement.play();
    }
    else if (this.state.recordingState === RecordingStates.PLAYBACK_READY) {
      this.videoElement.pause();
    }
    else if (this.state.recordingState === RecordingStates.PLAYBACK_PLAY) {
      this.videoElement.play();
      this.videoElement.addEventListener('ended', this.videoPlaybackReachedEnd);
    }
  }

  videoPlaybackReachedEnd() {
    this.videoElement.currentTime = 0;
    this.videoElement.removeEventListener('ended', this.videoPlaybackReachedEnd);
    this.setState({
      recordingState: RecordingStates.PLAYBACK_READY
    });
  }

  startRecording() {
    var record = RecordRTC(this.state.stream, { 
      mimeType: 'video/webm\;codecs=vp9',
      bitsPerSecond: 256000
    });
    record.startRecording();
    this.setState({
      recordingState: RecordingStates.RECORDING,
      recordingVideo: record
    })
  }

  stopRecording() {
    if (this.state.recordingVideo) {
      this.state.recordingVideo.stopRecording( (blobUrl) => {
        
        this.setState({
          recordingState: RecordingStates.PLAYBACK_READY,
          recordingVideo: null,
          src: blobUrl
        });

      });
    }
  }

  startPlayback() {
    this.setState({
      recordingState: RecordingStates.PLAYBACK_PLAY
    });
  }

  stopPlayback() {
    this.videoElement.currentTime = 0; // Go back to the beginning
    this.setState({
      recordingState: RecordingStates.PLAYBACK_READY
    });
  }

  cancelPlayback() {
    this.setState({
      recordingState: RecordingStates.READY,
      src: window.URL.createObjectURL(this.state.stream)
    });
  }

  beginUpload() {
    this.setState({
      recordingState: RecordingStates.UPLOADING
    });
    setTimeout( () => {
      this.setState({
        recordingState: RecordingStates.UPLOAD_SUCCESS
      });
    }, 5000)
  }

  uploadSuccessOkay() {
    this.setState({
      recordingState: RecordingStates.READY,
      src: window.URL.createObjectURL(this.state.stream)
    });
  }

  uploadFailureCancel() {
    this.setState({
      recordingState: RecordingStates.READY,
      src: window.URL.createObjectURL(this.state.stream)
    });
  }

  uploadFailureRetry() {
    this.beginUpload();
  }

  // TODO: Remove eventually
  debugStringForRecordingState(recordingState) {
    switch (recordingState) {
      case RecordingStates.WAITING:
        return "WAITING";
      break;
      case RecordingStates.NO_CAMERA:
        return "NO_CAMERA";
      break;
      case RecordingStates.READY:
        return "READY";
      break;
      case RecordingStates.RECORDING:
        return "RECORDING";
      break;
      case RecordingStates.PLAYBACK_READY:
        return "PLAYBACK_READY";
      break;
      case RecordingStates.PLAYBACK_PLAY:
        return "PLAYBACK_PLAY";
      break;
      case RecordingStates.UPLOADING:
        return "UPLOADING";
      break;
      case RecordingStates.UPLOAD_SUCCESS:
        return "UPLOAD_SUCCESS";
      break;
      case RecordingStates.UPLOAD_FAILURE:
        return "UPLOAD_FAILURE";
      break;
    }
  }

  render() {

    var videoOrInfo = (<video ref={ (element) => this.videoElement = element } className="recorder-video" src={this.state.src}></video>);
    var recordingControls = (<div className="recorder-controls"></div>);

    switch (this.state.recordingState) {

      case RecordingStates.WAITING:
        recordingControls = (
          <div className="recorder-controls">
            <button className="btn btn-md recorder-controls-button" disabled>
              <img src="img/record.svg" />Record
            </button>
          </div>
        );
      break;

      case RecordingStates.NO_CAMERA:
        videoOrInfo = (<div className="recorder-info">No camera available</div>);
        recordingControls = (
          <div className="recorder-controls">
            <button className="btn btn-md recorder-controls-button" disabled>
              <img src="img/record.svg" />Record
            </button>
          </div>
        );
      break;

      case RecordingStates.READY:
        recordingControls = (
          <div className="recorder-controls">
            <button className="btn btn-md recorder-controls-button" onClick={this.startRecording}>
              <img src="img/record.svg" />Record
            </button>
          </div>
        );
      break;

      case RecordingStates.RECORDING:
        recordingControls = (
          <div className="recorder-controls">
            <button className="btn btn-md recorder-controls-button" onClick={this.stopRecording}>
              Stop
            </button>
          </div>
        );
      break;

      case RecordingStates.PLAYBACK_READY:
        recordingControls = (
          <div className="recorder-controls">
            <button className="btn btn-md recorder-controls-button btn-cancel" onClick={this.cancelPlayback}>
              Cancel
            </button>
            <button className="btn btn-md recorder-controls-button" onClick={this.startPlayback}>
              Play
            </button>
            <button className="btn btn-md recorder-controls-button btn-success" onClick={this.beginUpload}>
              Save
            </button>
          </div>
        );
      break;

      case RecordingStates.PLAYBACK_PLAY:
        recordingControls = (
          <div className="recorder-controls">
            <button className="btn btn-md recorder-controls-button btn-cancel" disabled>
              Cancel
            </button>
            <button className="btn btn-md recorder-controls-button" onClick={this.stopPlayback}>
              Stop
            </button>
            <button className="btn btn-md recorder-controls-button btn-success" disabled>
              Save
            </button>
          </div>
        );
      break;

      case RecordingStates.UPLOADING:
        videoOrInfo = (<div className="recorder-info"><div className="pulse">Uploading...</div></div>);
      break;

      case RecordingStates.UPLOAD_SUCCESS:
        videoOrInfo = (<div className="recorder-info">Uploaded!</div>);
        recordingControls = (
          <div className="recorder-controls" onClick={this.uploadSuccessOkay}>
            <button className="btn btn-md recorder-controls-button btn-success">
              Okay
            </button>
          </div>
        );
      break;

      case RecordingStates.UPLOAD_FAILURE:
        videoOrInfo = (<div className="recorder-info">Upload failed.</div>);
        recordingControls = (
          <div className="recorder-controls">
            <button className="btn btn-md recorder-controls-button btn-cancel" onClick={this.uploadFailureCancel}>
              Cancel
            </button>
            <button className="btn btn-md recorder-controls-button" onClick={this.uploadFailureRetry}>
              Retry
            </button>
          </div>
        );
      break;

    }

    return (
      <div className="recorder">
        <div className="debug">{this.debugStringForRecordingState(this.state.recordingState)}</div>
        <h2>Record Your Message</h2>
        {videoOrInfo}
        {recordingControls}
      </div>
    );
  }

}

export default Recorder;
