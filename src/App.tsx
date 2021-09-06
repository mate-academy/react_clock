import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

interface State {
  clockName: number;
  isClockVisible: boolean;
}

class App extends React.Component<{}, State> {
  state = {
    clockName: 0,
    isClockVisible: true,
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  randomClockName = () => {
    this.setState({ clockName: Math.ceil(Math.random() * 10) });
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        {isClockVisible && (
          <p>
            <Clock name={clockName} />
          </p>
        )}
        <div className="App__buttons">
          <button
            type="button"
            className="App__button"
            onClick={this.showClock}
          >
            Show Clock
          </button>
          <button
            type="button"
            className="App__button"
            onClick={this.hideClock}
          >
            Hide Clock
          </button>
          <button
            type="button"
            className="App__button"
            onClick={this.randomClockName}
          >
            Random Name
          </button>
        </div>
      </div>
    );
  }
}

export default App;
