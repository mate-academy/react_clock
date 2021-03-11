import React from 'react';
import { Clock } from './components/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: false,
    clockName: 0,
  }

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {isClockVisible && (
          <p>
            Current time:
            {' '}
            <Clock name={this.state.clockName} />
          </p>
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
            this.setState({ clockName: Math.round(Math.random() * 100) });
          }}
        >
          Set Random Name
        </button>
      </div>
    );
  }
}

export default App;
