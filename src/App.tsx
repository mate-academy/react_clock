import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

type Props = {};

type State = {
  isClockVisible: boolean,
  clockName: string,
};

class App extends React.Component<Props, State> {
  state = {
    isClockVisible: true,
    clockName: 'React clock',
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  HideClock = () => {
    this.setState({ isClockVisible: false });
  };

  RandomName = () => {
    const myArray = ['React', 'Clock', 'Time', 'Now', 'Good clock'];
    const rand = Math.floor(Math.random() * myArray.length);

    this.setState({ clockName: myArray[rand] });
  };

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <div className="App">
        {isClockVisible && (
          <Clock name={clockName} />
        )}
        <div className="clock__buttons">
          <button
            type="button"
            onClick={this.showClock}
            className="clock__buttons-button"
            disabled={isClockVisible}
          >
            Show Clock
          </button>

          <button
            type="button"
            onClick={this.HideClock}
            className="clock__buttons-button"
            disabled={!isClockVisible}
          >
            Hide Clock
          </button>

          <button
            type="button"
            onClick={this.RandomName}
            className="clock__buttons-button"
          >
            Set random className
          </button>
        </div>
      </div>
    );
  }
}

export default App;
