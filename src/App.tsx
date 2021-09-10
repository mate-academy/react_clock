import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

interface State {
  isClockVisible: boolean,
  clockName: number,
}

class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
    clockName: 0,
  };

  showClock = () => {
    this.setState({
      isClockVisible: true,
    });
  };

  hideClock = () => {
    this.setState({
      isClockVisible: false,
    });
  };

  setRandomName = () => {
    this.setState({
      clockName: Math.ceil(Math.random() * 10),
    });
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>{`React clock ${clockName}`}</h1>

        <button
          type="button"
          onClick={this.showClock}
          className="btn btn-secondary"
        >
          show clock
        </button>

        <button
          type="button"
          onClick={this.hideClock}
          className="btn btn-secondary"
        >
          hide clock
        </button>

        <button
          type="button"
          onClick={this.setRandomName}
          className="btn btn-secondary"
        >
          set random name
        </button>

        <p>
          Current time:
          {' '}
          {isClockVisible && (
            <Clock name={clockName} />
          )}
        </p>
      </div>
    );
  }
}

export default App;
