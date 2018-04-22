import React from 'react';
import { Modal, ModalBody } from 'reactstrap';
const phone = require('./../assets/iconmonstr-phone-1.svg');

const ModalContainer = props => {
  return (
    <Modal
      isOpen={props.isModalOpen}
      toggle={props.toggle}
      className="w-100 h-100 m-0"
    >
      <ModalBody className="bg-dark h-100">
        <div className="container h-100 d-flex flex-column">
          <div className="row d-flex justify-content-center my-auto">
            <div className="col-lg-10">
              <h1 className="text-center text-light display-4">
                {props.question}
              </h1>
            </div>
          </div>

          <div className="d-flex justify-content-center p-3">
            <div
              className="btn-hangup bg-danger d-flex justify-content-center align-items-center"
              onClick={() => props.toggle()}
            >
              <img src={phone} />
            </div>
          </div>
        </div>

        <div className="video-thumbnail" />
      </ModalBody>
    </Modal>
  );
};

export default ModalContainer;
