import React from 'react';
import './App.scss';
import { Clock } from './Clock/Clock';

export class App extends React.PureComponent {
  state = {
    isClockVisible: true,
    clockName: '0',
  };

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <>
        <div className="App">
          <Clock name={clockName} isClockVisible={isClockVisible} />

          <button
            type="button"
            className="App__visible"
            onClick={() => this.setState({ isClockVisible: true })}
          >
            Show Clock
          </button>
          <button
            type="button"
            className="App__hidden"
            onClick={() => this.setState({ isClockVisible: false })}
          >
            Hide Clock
          </button>
          <button
            type="button"
            className="App__random-name"
            onClick={() => this.setState({ clockName: Math.floor(Math.random() * 100).toString() })}
          >
            Random name
          </button>
        </div>
      </>
    );
  }
}
