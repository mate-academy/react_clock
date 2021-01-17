import React from 'react';
import Clock from './Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: Math.random(),
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          { this.state.isClockVisible
            && <Clock name={this.state.clockName} /> }
        </p>

        <button
          type="button"
          onClick={() => this.setState({ isClockVisible: true })}
        >
          Show Clock
        </button>

        <button
          type="button"
          onClick={() => this.setState({ isClockVisible: false })}
        >
          Hide clock
        </button>

        <button
          type="button"
          onClick={() => this.setState({ clockName: Math.random() })}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
