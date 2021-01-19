import React from 'react';
import { Clock } from './Clock';
import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: false,
    clockName: null,
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.isClockVisible && (
          <Clock
            name={this.state.clockName}
          />
        )}
        <div className="App__buttons">
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
              this.setState({ clockName: pickRandomName() });
            }}
          >
            Set random name
          </button>
        </div>
      </div>
    );
  }
}

function pickRandomName() {
  return new Date().getMilliseconds();
}

export default App;
