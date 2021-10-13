import { Component } from 'react';
import { Clock } from './components/Clock/Clock';

import './App.scss';

type State = {
  isClockVisible: boolean;
  clockName: number;
};

export class App extends Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <div className="clock">
          <p>
            {isClockVisible && (
              <Clock name={clockName} />
            )}
          </p>
          <button
            type="button"
            className="clockButton"
            onClick={() => {
              this.setState({ isClockVisible: true });
            }}
          >
            Show CLock
          </button>
          <button
            type="button"
            className="clockButton"
            onClick={() => {
              this.setState({ isClockVisible: false });
            }}
          >
            Hide Clock
          </button>
          <button
            type="button"
            className="clockButton"
            onClick={() => {
              this.setState({ clockName: Math.round(Math.random() * 100) });
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
