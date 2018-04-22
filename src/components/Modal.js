import React, { Component } from 'react';
import RecordRTC from 'recordrtc';
import Webcam from 'react-webcam';
import Loading from './Loading';
import { Modal, ModalBody } from 'reactstrap';
import { VIDEO_UPLOAD_URL } from './../config';
const phone = require('./../assets/iconmonstr-phone-1.svg');

class ModalContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { isLoading: false };

    this.onVideoStop = this.onVideoStop.bind(this);
    this.onVideoUpload = this.onVideoUpload.bind(this);
  }

  onVideoRecording() {
    // const videoTrack = this.webcam.stream.getVideoTracks()[0];
    const options = {
      type: 'video',
      video: {
        width: 300,
        height: 300
      },
      canvas: {
        width: 300,
        height: 300
      }
    };

    this.recorder = RecordRTC(this.webcam.stream, options);

    this.recorder.startRecording();
  }

  onVideoStop() {
    const videoTrack = this.webcam.stream.getVideoTracks()[0];

    videoTrack.stop();

    this.recorder.stopRecording(this.onVideoUpload);

    // this.props.toggle();
  }

  onVideoUpload(blobURL) {
    const that = this;

    that.setState({ isLoading: true });

    var xhr = new XMLHttpRequest();
    xhr.open('GET', blobURL, true);
    xhr.responseType = 'blob';
    xhr.onload = function(e) {
      if (this.status == 200) {
        const blob = this.response;

        const file = new File(
          [blob],
          `${new Date().getTime().toString()}.webm`,
          {
            type: blob.type,
            lastModified: Date.now()
          }
        );

        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function() {
          console.log(reader.result);

          const params = {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: reader.result
          };

          fetch(`${VIDEO_UPLOAD_URL}`, params)
            .then(response => {
              return response.json();
            })
            .then(responseJSON => {
              that.setState({ isLoading: false });
              that.props.toggle();

              responseJSON;
            })
            .catch(error => {
              that.setState({ isLoading: false });
              console.error(error);
            });
        };
        reader.onerror = function(error) {
          that.setState({ isLoading: false });
          console.log('Error: ', error);
        };
      }
    };

    xhr.send();
  }

  render() {
    return (
      <Modal
        isOpen={this.props.isModalOpen}
        toggle={this.props.toggle}
        className="w-100 h-100 m-0"
      >
        <ModalBody className="bg-dark h-100">
          <div className="container h-100 d-flex flex-column">
            <div className="row d-flex justify-content-center my-auto">
              <div className="col-lg-10">
                <h1 className="text-center text-light display-4">
                  {this.props.question}
                </h1>
              </div>
            </div>

            <div className="d-flex justify-content-center p-3">
              <button
                className="btn btn-danger btn-lg btn-hangup d-flex justify-content-center align-items-center"
                onClick={() => this.onVideoStop()}
              >
                <img src={phone} />
              </button>
            </div>
          </div>

          <Webcam
            className="video-thumbnail"
            height={200}
            ref={cam => (this.webcam = cam)}
            width={200}
            onUserMedia={this.onVideoRecording.bind(this)}
          />

          {this.state.isLoading ? (
            <div className="d-flex justify-content-center align-items-center backdrop">
              <Loading color="info" />
            </div>
          ) : null}
        </ModalBody>
      </Modal>
    );
  }
}

export default ModalContainer;
