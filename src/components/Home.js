import React, { Component } from 'react';
import TinyLineChart from './TinyLineChart';
import Modal from './Modal';

const questions = ['The way you feel is very important, so how are you today?'];

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { isModalOpen: false };
  }

  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  render() {
    return (
      <div className="container-flex h-100 bg-gradient-day d-flex flex-column">
        <div className="p-3">
          <h3 className="text-light">Boundless</h3>
        </div>

        <div className="container d-flex flex-fill">
          <div className="d-flex flex-column justify-content-center flex-fill">
            <div className="my-auto">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-10">
                  <h1 className="text-center text-light display-4">
                    {questions[0]}
                  </h1>
                </div>
              </div>

              <div className="row d-flex justify-content-center my-4">
                <div className="col-lg-3">
                  <button
                    className="btn btn-info btn-lg btn-lg-rounded btn-block"
                    onClick={() => this.toggleModal()}
                  >
                    Say anything
                  </button>
                </div>
              </div>
            </div>

            <div className="row d-flex justify-content-center align-items-center pb-4">
              <div className="col-4 d-flex flex-column align-items-center">
                <h5 className="text-light text-center">Today</h5>
                <TinyLineChart />
              </div>
              <div className="col-4 d-flex flex-column align-items-center">
                <h5 className="text-light text-center">This Week</h5>
                <TinyLineChart />
              </div>
              <div className="col-4  d-flex flex-column align-items-center">
                <h5 className="text-light text-center">This Month</h5>
                <TinyLineChart />
              </div>
            </div>
          </div>
        </div>

        <Modal
          question={questions[0]}
          isModalOpen={this.state.isModalOpen}
          toggle={this.toggleModal.bind(this)}
        />
      </div>
    );
  }
}

export default Home;
