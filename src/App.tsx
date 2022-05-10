import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type Props = {};

type State = {
  isClockVisible: boolean,
  clockName: string,
};

class App extends React.Component<Props, State> {
  state = {
    isClockVisible: true,
    clockName: '<<<Clock>>>',
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  changeName = () => {
    const clockNumber = Math.floor(Math.random() * 100);

    this.setState({ clockName: `<<<Clock - ${clockNumber}>>>` });
  };

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <div className="App">
        <h1 className="title">{clockName}</h1>

        {isClockVisible && (
          <p data-cy="time" className="clock">
            Time:
            <Clock name={clockName} />
          </p>
        )}

        <div className="buttons">
          <button
            type="button"
            onClick={this.showClock}
            className="clockButton"
            disabled={isClockVisible}
          >
            Show Time
          </button>

          <button
            type="button"
            onClick={this.hideClock}
            disabled={!isClockVisible}
            className="clockButton"
          >
            Hide Time
          </button>

          <button
            type="button"
            onClick={this.changeName}
            className="clockButton"
          >
            Set new name
          </button>
        </div>
      </div>
    );
  }
}

export default App;
