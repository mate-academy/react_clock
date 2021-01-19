import React from 'react';
import { Clock } from './components/Clock';

import './App.scss';

export class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  changeName = () => {
    if (this.state.isClockVisible) {
      this.setState({
        clockName: Math.round(Math.random() * 10),
      });
    }
  }

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {isClockVisible && <Clock name={clockName} />}

        <button
          onClick={() => {
            this.setState({ isClockVisible: true });
          }}
          type="button"
        >
          Show Clock
        </button>

        <button
          onClick={() => {
            this.setState({ isClockVisible: false });
          }}
          type="button"
        >
          Hide Clock
        </button>

        <button
          onClick={this.changeName}
          type="button"
        >
          Set random name
        </button>
      </div>
    );
  }
}
