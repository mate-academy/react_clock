import React from 'react';

import { Clock } from './components/Clock/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    clockName: 0,
    isClockVisible: true,
  };

  showClock = () => {
    this.setState({ isClockVisible: true });

    if (this.state.isClockVisible !== true) {
      // eslint-disable-next-line
      console.log('Showing');
    }
  }

  hideClock = () => {
    this.setState({ isClockVisible: false });

    if (this.state.isClockVisible !== false) {
      // eslint-disable-next-line
      console.log('Hidden');
    }
  }

  setRandomName = () => {
    this.setState({ clockName: Math.floor(Math.random() * (999 - 100) + 100) });
  };

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <div className="App">
        <h1 className="App__title">
          {'React clock '}
          {
          (isClockVisible && clockName) || ''}
        </h1>
        <p className="App__time-text">
          {`Current time: `}
          { this.state.isClockVisible && <Clock name={clockName} /> }
        </p>

        <button
          type="button"
          onClick={this.showClock}
          className="App__button"
        >
          Show Clock
        </button>

        <button
          type="button"
          onClick={this.hideClock}
          className="App__button"
        >
          Hide Clock
        </button>

        <button
          type="button"
          onClick={this.setRandomName}
          className="App__button"
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
