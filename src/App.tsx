import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 1,
  };

  componentDidUpdate(prev) {
    // eslint-disable-next-line no-console
    console.log(`The Clock was renamed from ${prev} to ${this.state.clockName}`);
  }

  // eslint-disable-next-line class-methods-use-this
  setRandom() {
    return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {this.state.isClockVisible && (
            <Clock name={this.state.clockName} />
          )}
          <button
            type="button"
            onClick={() => {
              this.setState({ isClockVisible: true });
            }}
          >
            Show Clock
          </button>
          <button
            type="button"
            onClick={() => {
              this.setState({ isClockVisible: false });
            }}
          >
            Hide Clock
          </button>
          <button
            type="button"
            onClick={() => {
              this.setState({ clockName: this.setRandom() });
            }}
          >
            Set random name
          </button>
        </p>
      </div>
    );
  }
}

export default App;
