import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

export default class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <>
        <div className="App">
          <h1>React clock</h1>
          {isClockVisible && (
            <Clock name={clockName} />
          )}
        </div>

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
          Hide Clock
        </button>

        <button
          type="button"
          onClick={() => this.setState({ clockName: Math.random() })}
        >
          Set random name
        </button>
      </>
    );
  }
}
