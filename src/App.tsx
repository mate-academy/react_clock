import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  isClockVisible: boolean;
};

class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
  };

  changeStatus(): void {
    const newStatus = { ...this.state };

    newStatus.isClockVisible = !newStatus.isClockVisible;

    this.setState(newStatus);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        <p>
          Current time:
          {' '}
          {this.state.isClockVisible && <Clock />}
        </p>

        <button
          type="button"
          onClick={() => {
            this.changeStatus();
          }}
        >
          Show Clock
        </button>

        <button
          type="button"
          onClick={() => {
            this.changeStatus();
          }}
        >
          Hide Clock
        </button>
      </div>
    );
  }
}

export default App;
