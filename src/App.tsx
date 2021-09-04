import React from 'react';
import './App.scss';

import { Clock } from './components/Clock';

type State = {
  isClockVisible: boolean;
  clockName: string;
};

class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
    clockName: 'React clock',
  };

  clockRandomNames = () => {
    const randomNumbers = Math.floor(Math.random() * 1000);

    return `React clock ${randomNumbers}`;
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <div className="App__clock">
          {isClockVisible && (
            <Clock name={clockName} />
          )}
        </div>

        <div className="App__buttons">
          <button
            className="btn btn-primary"
            type="button"
            onClick={this.showClock}
          >
            Show clock
          </button>

          <button
            className="btn btn-primary"
            type="button"
            onClick={() => {
              this.setState({ clockName: this.clockRandomNames() });
            }}
          >
            Set random name
          </button>

          <button
            className="btn btn-danger"
            type="button"
            onClick={this.hideClock}
          >
            Hide clock
          </button>
        </div>
      </div>
    );
  }
}

export default App;
