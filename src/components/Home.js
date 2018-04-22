import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="container-flex h-100 bg-gradient-day d-flex flex-column">
        <div className="d-flex p-3">
          <h3 className="text-light">Boundless</h3>
        </div>

        <div className="d-flex flex-column justify-content-center h-100">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8 d-flex flex-column justify-content-center align-items-center">
              <h1 className="text-center text-light display-4 mb-4">
                The way you feel is very important, so how are you today?
              </h1>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-lg-3 d-flex flex-column justify-content-center align-items-center">
              <button className="btn btn-info btn-lg btn-lg-rounded btn-block">
                Say anything
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
