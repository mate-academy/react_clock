import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  isClockVisible: boolean,
  clocksName: number,
};

class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
    clocksName: 1,
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  changeName = () => {
    this.setState({ clocksName: Math.floor(Math.random() * 100) });
  };

  render() {
    const { isClockVisible, clocksName } = this.state;

    return (
      <div className="App">
        {isClockVisible && (<Clock clocksName={clocksName} />)}

        <h1 className="App__title">
          React clock
        </h1>

        <div className="App__buttons">
          <button
            className="App__button"
            type="button"
            onClick={this.showClock}
            disabled={isClockVisible}
          >
            Show clock
          </button>

          <button
            className="App__button"
            type="button"
            onClick={this.changeName}
            disabled={!isClockVisible}
          >
            Rename clock
          </button>

          <button
            className="App__button"
            type="button"
            onClick={this.hideClock}
            disabled={!isClockVisible}
          >
            Hide Clock
          </button>
        </div>
      </div>
    );
  }
}

export default App;
