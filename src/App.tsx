import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type Props = {};

export type State = {
  clockName: number;
  isClockVisible: boolean;
};

class App extends React.Component<Props, State> {
  state = {
    clockName: 0,
    isClockVisible: true,
  };

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        <div className="time-container">
          {isClockVisible
          && <Clock name={clockName} />}
        </div>

        <button
          className="button"
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: true });
          }}
        >
          Show Clock
        </button>

        <button
          className="button"
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: false });
          }}
        >
          Hide Clock
        </button>

        <button
          className="button"
          type="button"
          onClick={() => {
            this.setState({ clockName: Math.round(Math.random() * 1000) });
          }}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
