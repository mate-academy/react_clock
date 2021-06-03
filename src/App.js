import React from 'react';
import './App.scss';
import { Clock } from './clock';

class App extends React.Component {
  state = {
    isClockVisible: false,
    clockName: 0,
  }

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <button
          type="button"
          onClick={() => this.setState({ clockName: Math.random() })}
        >
          Set random name
        </button>
        <button
          type="button"
          onClick={() => this.setState({ isClockVisible: true })}
        >
          Show clock
        </button>
        <button
          type="button"
          onClick={() => this.setState({ isClockVisible: false })}
        >
          Hide clock
        </button>

        {isClockVisible && <Clock name={clockName} />}
      </div>
    );
  }
}

export default App;
