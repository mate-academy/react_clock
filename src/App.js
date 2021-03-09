import React, { Component } from 'react';
import { Clock } from './components/Clock';

import './App.scss';

class App extends Component {
  state = {
    isClockVisible: false,
    clockName: 0,
  }

  show = () => this.setState({ isClockVisible: true })

  hide = () => this.setState({ isClockVisible: false });

  generateRandomNumber = () => {
    const digit = Math.round(Math.random() * 100);

    this.setState({ clockName: digit });
  }

  render() {
    const { show, hide, generateRandomNumber } = this;
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {isClockVisible
          && <Clock clockName={clockName} />
        }
        <button
          type="button"
          onClick={show}
        >
          Show Clock
        </button>
        <button
          type="button"
          onClick={hide}
        >
          Hide Clock
        </button>
        <button
          type="button"
          onClick={generateRandomNumber}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
