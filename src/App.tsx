import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

type State = {
  isClockVisible: boolean,
  clockName: number,
};

class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: false,
    clockName: 0,
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  renameClock = () => {
    this.setState({ clockName: Math.floor(Math.random() * 100) });
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        {isClockVisible && (<Clock name={clockName} />)}

        <div className="App__buttons">
          <button
            className="App__button"
            type="button"
            onClick={this.showClock}
            disabled={isClockVisible}
          >
            SHOW CLOCK
          </button>

          <button
            className="App__button"
            type="button"
            onClick={this.renameClock}
            disabled={!isClockVisible}
          >
            SET RANDOM NAME
          </button>

          <button
            className="App__button"
            type="button"
            onClick={this.hideClock}
            disabled={!isClockVisible}
          >
            HIDE CLOCK
          </button>
        </div>
      </div>
    );
  }
}

export default App;
