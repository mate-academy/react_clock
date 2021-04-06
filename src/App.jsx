import React from 'react';
import { Clock } from './Clock';

import 'bootstrap/scss/bootstrap.scss';

import './App.scss';

export class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: Math.ceil(Math.random() * 100),
  };

  componentDidMount() {
    setInterval(() => {
      const date = new Date();

      // eslint-disable-next-line
      this.state.isClockVisible && console.log(date.toLocaleTimeString());
    }, 1000);
  }

  showClock = () => {
    this.setState({ isClockVisible: true });
  }

  hideClock = () => {
    this.setState({ isClockVisible: false });
  }

  setRandomName = () => {
    this.setState({ clockName: Math.ceil(Math.random() * 100) });
  }

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App shadow-lg p-3 mb-5 bg-body rounded">
        <h1>React clock</h1>

        {isClockVisible
          ? <Clock name={clockName} />
          : <p>{`Clock name: ${clockName}`}</p>
        }

        <div className="App__buttons">
          {isClockVisible
            ? (
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={this.hideClock}
              >
                Hide Clock
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-outline-success"
                onClick={this.showClock}
              >
                Show Clock
              </button>
            )
            }
          <button
            type="button"
            className="btn btn-outline-info"
            onClick={this.setRandomName}
          >
            Set random name
          </button>
        </div>
      </div>
    );
  }
}
