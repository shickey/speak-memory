import React from 'react';
import RecordRTC from 'recordrtc';

const hasGetUserMedia = !!(navigator.mediaDevices.getUserMedia);

const cameraAccessibility = {
  UNKNOWN: "UNKNOWN",
  NO: "NO",
  YES: "YES"
}

class Recorder extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      cameraAccessible: cameraAccessibility.UNKNOWN,
      stream: null,
      src: null,
      recordingVideo: null
    }

    this.startRecording = this.startRecording.bind(this);
    this.stopRecording = this.stopRecording.bind(this);
  }

  componentDidMount() {
    // Begin camera
    navigator.mediaDevices.getUserMedia({
      audio: true,
      video: { // 4:3 aspect ratio. RIP SD-video.
        width: 600,
        height: 450
      }
    }).then( (stream) => {
      console.log("then");
      this.setState({ 
        cameraAccessible: cameraAccessibility.YES,
        stream: stream,
        src: window.URL.createObjectURL(stream)
      });
    }).catch( (err) => {
      this.setState({
        cameraAccessible: cameraAccessibility.NO,
        stream: null,
        src: null
      })
    })
  }

  startRecording() {
    console.log("start");
    var record = RecordRTC(this.state.stream, { 
      mimeType: 'video/webm\;codecs=vp9',
      bitsPerSecond: 256000
    });
    record.startRecording();
    this.setState({
      recordingVideo: record
    })
  }

  stopRecording() {
    console.log("stop");
    if (this.state.recordingVideo) {
      this.state.recordingVideo.stopRecording( (blobUrl) => {
        
        var blob = this.state.recordingVideo.blob;
        console.log(blob);

        // Do stuff with the blobbbbbb


        // // Download
        // var a = document.createElement("a");
        // document.body.appendChild(a);
        // a.style = "display: none";
        // a.href = blobUrl;
        // a.download = "foobar.webm";
        // a.click();

        this.setState({
          recordingVideo: null
        });
      });
    }
  }

  render() {

    var videoOrError = (<video autoPlay className="recorder-video" src={this.state.src}></video>);
    if (this.state.cameraAccessible === cameraAccessibility.NO) {
      videoOrError = (<div className="recorder-error">No camera available</div>)
    }

    var recordButton = (
      <button className="btn btn-md recorder-record-button" onClick={this.startRecording} disabled={this.state.cameraAccessible !== cameraAccessibility.YES}>
        <img src="img/record.svg" />Record
      </button>);
    if (this.state.recordingVideo) {
      recordButton = (
      <button className="btn btn-md recorder-record-button" onClick={this.stopRecording} disabled={this.state.cameraAccessible !== cameraAccessibility.YES}>
        Stop
      </button>)
    }

    return (
      <div className="recorder">
        <h2>Record Your Message</h2>
        {videoOrError}
        <div className="recorder-controls">
          {recordButton}
        </div>
      </div>
    );
  }

}

export default Recorder;
