import React from 'react';
import './App.scss';
import { Clock } from './Clock';

class App extends React.Component {
  state = {
    isClockVisible: false,
    clockName: null,
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
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
            this.setState({ clockName: Math.floor(Math.random() * 1000) });
          }}
        >
          Set random name
        </button>
        <p>
          Current time:
          {this.state.isClockVisible && (<Clock name={this.state.clockName} />)}
          {/* Print the time here instead of DevTools */}
        </p>
      </div>
    );
  }
}

export default App;
