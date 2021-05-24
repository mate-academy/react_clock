import React from 'react';
import { Clock } from './components/Clock';

import './App.scss';

export class App extends React.Component {
  state = {
    isClockVisible: true,
    name: 0,
  }

  hideClock = () => {
    this.setState({
      isClockVisible: false,
    });
  }

  showClock = () => {
    this.setState({
      isClockVisible: true,
    });
  }

  changeName = () => {
    this.setState({
      name: (Math.random() * 100).toFixed(0),
    });
  }

  render() {
    const { name } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.isClockVisible && <Clock name={name} />}
        <div className="App__buttons">
          <button
            type="button"
            onClick={this.showClock}
          >
            Show
          </button>
          {' '}
          <button
            type="button"
            onClick={this.hideClock}
          >
            Hide
          </button>
          {' '}
          <button
            type="button"
            onClick={this.changeName}
          >
            Set name
          </button>
        </div>
      </div>
    );
  }
}
