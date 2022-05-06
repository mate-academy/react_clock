import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  isClockVisible: boolean,
  clockName: number,
};

class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: 777,
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

  getRandom = () => {
    this.setState({
      clockName: Math.round(Math.random() * 100),
    });
  };

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <div className="App">
        {this.state.isClockVisible && (
          <Clock
            clockName={clockName}
          />
        )}

        <button
          type="button"
          className="show-btn btn"
          disabled={isClockVisible}
          onClick={this.showClock}
        >
          Show Clock
        </button>

        <button
          type="button"
          className="hide-btn btn"
          disabled={!isClockVisible}
          onClick={this.hideClock}
        >
          Hide Clock
        </button>

        <button
          type="button"
          className="set-btn btn"
          disabled={!isClockVisible}
          onClick={this.getRandom}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
