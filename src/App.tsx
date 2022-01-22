import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

interface State {
  isClockVisible: boolean;
  clockName: number;
}

class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
    clockName: 0,
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  randomName = () => {
    this.setState({ clockName: Math.floor(Math.random() * 100) });
  };

  render(): React.ReactNode {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {isClockVisible && <Clock clockName={this.state.clockName} />}
        <div className="btn-group " role="group" aria-label="Basic mixed styles example">
          <button
            type="button"
            className="btn btn-success"
            onClick={this.showClock}
          >
            Show Clock
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={this.hideClock}
          >
            Hide Clock
          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={this.randomName}
          >
            Set random name
          </button>
        </div>
      </div>
    );
  }
}

export default App;
