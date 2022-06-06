import React from 'react';
import { Clock } from './components/clock/Clock';

import './App.scss';

interface State {
  isClockVisible: boolean,
  clockName: number,
}

class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: 1,
  };

  render(): React.ReactNode {
    const { clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <div className="clock-box">
          <p className="clock-box__contetn">Current time:</p>
          {this.state.isClockVisible && (
            <Clock name={clockName} />)}
        </div>

        <button
          type="button"
          onClick={() => this.setState({ isClockVisible: false })}
        >
          Hide Clock
        </button>

        <button
          type="button"
          onClick={() => this.setState({ isClockVisible: true })}
        >
          Show Clock
        </button>

        <button
          type="button"
          onClick={() => this.setState({ clockName: Math.random() * 9999 })}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
