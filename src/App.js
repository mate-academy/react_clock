import React from 'react';
import './App.scss';
import { Clock } from './Clock';

export class App extends React.Component {
  state = {
    clockVisible: true,
    clockName: Math.floor(Math.random() * 100),
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line
      console.log(
        `The Clock was renamed from
          ${prevState.clockName} to ${this.state.clockName}
        `,
      );
    }
  }

  hideClock = () => {
    this.setState({
      clockVisible: false,
    });
  }

  showClock = () => {
    this.setState({
      clockVisible: true,
    });
  }

  changeName = () => {
    this.setState({
      clockName: Math.floor(Math.random() * 100),
    });
  }

  render() {
    const { clockName, clockVisible } = this.state;

    return (
      <div className="app">
        <h1>React clock</h1>
        {clockVisible && <Clock name={clockName} />}
        <div className="app__buttons">
          <button
            className="app__button"
            type="button"
            onClick={this.hideClock}
          >
            Hide clock
          </button>
          <button
            className="app__button"
            type="button"
            onClick={this.showClock}
          >
            Show clock
          </button>
          <button
            className="app__button"
            type="button"
            onClick={this.changeName}
          >
            Set random name
          </button>
        </div>
      </div>
    );
  }
}
