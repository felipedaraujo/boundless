import React, { Component } from 'react';
import TinyLineChart from './TinyLineChart';
import Modal from './Modal';

const questions = ['The way you feel is very important, so how are you today?'];

const day = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 }
];

const month = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 3000, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 }
];

const year = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 4000, pv: 9800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 }
];

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
                <TinyLineChart data={day} />
              </div>
              <div className="col-4 d-flex flex-column align-items-center">
                <h5 className="text-light text-center">This Week</h5>
                <TinyLineChart data={month} />
              </div>
              <div className="col-4  d-flex flex-column align-items-center">
                <h5 className="text-light text-center">This Month</h5>
                <TinyLineChart data={year} />
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
