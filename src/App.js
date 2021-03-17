import React from 'react';

import './App.scss';
import { Clock } from './components/Clock';

class App extends React.Component {
  state = {
    name: 'Alica',
    isClockVisible: true,
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.name !== this.state.name) {
      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from `
        + `${prevState.name} to ${this.state.name}`);
    }
  }

  showClock = (event) => {
    this.setState({ isClockVisible: true });
  };

  hideClock = (event) => {
    this.setState({ isClockVisible: false });
  };

  changedName = (event) => {
    this.setState({ name: Math.random() });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        <button
          type="button"
          onClick={this.showClock}
        >
          Show Clock
        </button>

        <button
          type="button"
          onClick={this.hideClock}
        >
          Hide Clock
        </button>

        <button
          type="button"
          onClick={this.changedName}
        >
          Set random name
        </button>
        <p>
          Current time:
          {' '}
          { this.state.isClockVisible && <Clock /> }
        </p>
      </div>
    );
  }
}

export default App;
