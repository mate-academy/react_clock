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
    clockName: 1,
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
      clockName: Math.floor(Math.random() * 10),
    });
  };

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <div>
        {`Clock: ${clockName}`}
        <br />
        {isClockVisible && <Clock clockName={clockName} />}

        <div>
          <button
            type="submit"
            onClick={this.showClock}
            disabled={isClockVisible}
          >
            showClock
          </button>

          <button
            type="submit"
            onClick={this.hideClock}
            disabled={!isClockVisible}
          >
            hideClock
          </button>

          <button
            type="submit"
            onClick={this.randomName}
          >
            randomName
          </button>
        </div>
      </div>
    );
  }
}

export default App;
