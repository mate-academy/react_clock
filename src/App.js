import React from 'react';
import { Clock } from './Clock/Clock';

import './App.scss';

export class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {this.state.isClockVisible
            ? (<Clock name={this.state.clockName} />)
            : (<>No time</>)
          }
        </p>

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
            const newClockName = Math.floor(Math.random() * 50);

            this.setState({ clockName: newClockName });
          }}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
