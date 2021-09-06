import React from 'react';
import { Clock } from './Clock';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

interface State {
  isClockVisible: boolean,
  clockName: number,
}
export class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  showClock = () => {
    this.setState({
      isClockVisible: true,
    });
  };

  hideClock = () => {
    this.setState({
      isClockVisible: false,
    });
  };

  setRandomName = () => {
    const oldName = this.state.clockName;

    this.setState({ clockName: Math.floor(Math.random() * 100) + 1 });

    setTimeout(() => {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${oldName} to ${this.state.clockName}`);
    }, 0);
  };

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-4 d-flex justify-content-center">
              <h1 className="App__title">React clock</h1>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-4 d-flex justify-content-center">
              <p className="App__time">
                Current time:
                {' '}
                {isClockVisible && <Clock name={this.state.clockName} /> }
              </p>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-4 d-flex justify-content-around">
              <button
                type="button"
                onClick={this.showClock}
                className="btn btn-primary"
              >
                Show Clock
              </button>

              <button
                type="button"
                onClick={this.hideClock}
                className="btn btn-primary"
              >
                Hide Clock
              </button>

              <button
                type="button"
                onClick={this.setRandomName}
                className="btn btn-primary"
              >
                Set random name
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
