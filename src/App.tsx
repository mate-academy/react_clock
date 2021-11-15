import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 7,
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {this.state.isClockVisible && (
            <Clock name={this.state.clockName} />
          )}
        </p>
        <div className="button-visible">
          <button
            type="button"
            className="button-visible__show"
            onClick={() => {
              return this.setState({ isClockVisible: true });
            }}
          >
            Show Clock
          </button>
          <button
            type="button"
            className="button-visible__hide"
            onClick={() => {
              return this.setState({ isClockVisible: false });
            }}
          >
            Hide Clock
          </button>
        </div>
        <button
          type="button"
          onClick={() => {
            return this.setState({ clockName: Math.floor(Math.random() * 100) });
          }}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
