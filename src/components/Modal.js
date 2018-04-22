import React, { Component } from 'react';
import Webcam from 'react-webcam';
import { Modal, ModalBody } from 'reactstrap';
const phone = require('./../assets/iconmonstr-phone-1.svg');

class ModalContainer extends Component {
  onVideoRecording() {
    const videoTrack = this.webcam.stream.getVideoTracks()[0];
    const constraints = videoTrack.getConstraints();
    // constraints.facingMode = { exact: 'environment' };
    // videoTrack.applyConstraints(constraints);
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
                onClick={() => this.props.toggle()}
              >
                <img src={phone} />
              </button>
            </div>
          </div>

          <Webcam
            className="video-thumbnail"
            height={200}
            ref={cam => (this.webcam = cam)}
            screenshotFormat="image/jpeg"
            width={200}
            onUserMedia={this.onVideoRecording.bind(this)}
          />
        </ModalBody>
      </Modal>
    );
  }
}

export default ModalContainer;
