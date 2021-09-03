import React from 'react';
import './App.scss';
import { Clock } from './components';
import { string } from './string.json';

type State = {
  isClockVisible: boolean;
  clockName: string;
};

class App extends React.Component<React.FC<State>, State> {
  state: State = {
    isClockVisible: true,
    clockName: 'robot',
  };

  setRandomName = () => {
    if (this.state.isClockVisible) {
      const names: string[] = string.split(' ');

      this.setState({
        clockName: names[Math.floor(Math.random() * (names.length - 0) + 0)],
      });
    }
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  render() {
    const { isClockVisible, clockName } = this.state;
    const { setRandomName, hideClock, showClock } = this;

    return (
      <div className="App">
        <div className="App__container">
          {isClockVisible && <Clock name={clockName} />}

          <div className="App__buttons">
            <button
              type="button"
              className="App__button"
              onClick={showClock}
            >
              Show Clock
            </button>

            <button
              type="button"
              className="App__button"
              onClick={hideClock}
            >
              Hide Clock
            </button>

            <button
              type="button"
              className="App__button"
              onClick={setRandomName}
            >
              Set random name
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
