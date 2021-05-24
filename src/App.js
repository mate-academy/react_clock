import React from 'react';

import './App.scss';
import { Clock } from './components/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 1,
  }

  render() {
    return (
      <>
        {this.state.isClockVisible && (
        <div className="App">
          <h1>React clock</h1>
          <p>
            Current time:
            {' '}
            <Clock name={this.state.clockName} />
          </p>
        </div>
        )}
        <button
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: true });
          }}
        >
          Display
        </button>

        <button
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: false });
          }}
        >
          Hide
        </button>

        <button
          type="button"
          onClick={() => {
            this.setState({ clockName: Math.ceil(Math.random() * 100) });
          }}
        >
          Set random name
        </button>
      </>
    );
  }
}

export default App;
