import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="container-flex h-100 bg-warning d-flex align-items-center">
        <div className="row d-flex justify-content-center">
          <div className="col-10 d-flex flex-column justify-content-center align-items-center">
            <h1 className="text-center display-4">
              The way you feel is very important, so how are you today?
            </h1>
            <button className="btn btn-light btn-lg">Start now</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
