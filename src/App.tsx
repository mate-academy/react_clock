import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

type Props = {};

type State = {
  clockName: number,
  isClockVisible: boolean,
};

class App extends React.Component<Props, State> {
  state = {
    clockName: 0,
    isClockVisible: true,
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

  randomName = () => {
    this.setState({
      clockName: Math.floor(Math.random() * 10) + 1,
    });
  };

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <div className="App">
        {`Clock #${clockName}`}
        <br />
        {isClockVisible && <Clock clockName={clockName} />}

        <button
          type="submit"
          onClick={this.showClock}
          disabled={isClockVisible}
        >
          Show Clock
        </button>

        <button
          type="submit"
          onClick={this.hideClock}
          disabled={!isClockVisible}
        >
          Hide Clock
        </button>

        <button
          type="submit"
          onClick={this.randomName}
          disabled={!isClockVisible}
        >
          Random Name
        </button>
      </div>
    );
  }
}

export default App;
