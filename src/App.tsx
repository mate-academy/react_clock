import React from 'react';
import './App.scss';
import { Clock } from './Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 1,
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <h2>
          Clock name:
          {' '}
          {this.state.clockName}
        </h2>
        <p>
          Current time:
          {' '}
          {this.state.isClockVisible && <Clock name={this.state.clockName} />}
        </p>
        <div className="buttons">
          <button
            className="button"
            type="button"
            onClick={() => {
              this.setState({ isClockVisible: true });
            }}
          >
            Show clock
          </button>

          <button
            className="button"
            type="button"
            onClick={() => {
              this.setState({ isClockVisible: false });
            }}
          >
            Hide clock
          </button>

          <button
            className="button"
            type="button"
            onClick={() => {
              this.setState({ clockName: Math.floor(Math.random() * 100) });
            }}
          >
            Set random name
          </button>
        </div>
      </div>
    );
  }
}

export default App;
