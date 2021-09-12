import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

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
          onClick={this.setRandomName}
        >
          set random name
        </button>

        <button
          type="button"
          onClick={this.showClock}
        >
          show clock
        </button>

        <button
          type="button"
          onClick={this.hideClock}
        >
          hide clock
        </button>

        <p>
          Current time:
          {' '}
          {isClockVisible && (
            <div>
              <Clock name={clockName} />
            </div>
          )}
        </p>
      </div>
    );
  }
}

export default App;
