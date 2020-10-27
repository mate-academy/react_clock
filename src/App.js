import React from 'react';
import { Clock } from './components/Clock';

import './App.scss';

export class App extends React.Component {
  state = {
    clockName: 1,
    isClockVisible: false,
  }

  toggleVisibility = () => {
    this.setState(
      state => ({ isClockVisible: !state.isClockVisible }),
    );
  }

  clockNameRandomizer = () => {
    const newClockName = parseInt(Math.random() * 228, 10);

    this.setState({ clockName: newClockName });
    // eslint-disable-next-line
    console.log(`The Clock was renamed from 
      ${this.state.clockName} to ${newClockName}`);
  }

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>
          React clock №
          {clockName}
        </h1>

        {isClockVisible && <Clock name={clockName} />}

        <button
          type="button"
          className="show-clock"
          onClick={this.toggleVisibility}
        >
          {isClockVisible ? 'Hide clock' : 'Show clock'}
        </button>

        <button
          className="set-random-name-for-clock"
          type="button"
          onClick={this.clockNameRandomizer}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
