import React from 'react';
import './App.scss';
import { Clock } from './Clock';

export class App extends React.Component {
  state = {
    clockVisible: true,
    name: Math.floor(Math.random() * 100),
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.name !== this.state.name) {
      // eslint-disable-next-line
      console.log(
        `The Clock was renamed from ${prevState.name} to ${this.state.name}`,
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
      name: Math.floor(Math.random() * 100),
    });
  }

  render() {
    return (
      <div className="app">
        <h1>React clock</h1>
        {this.state.clockVisible && <Clock name={this.state.name} />}
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
