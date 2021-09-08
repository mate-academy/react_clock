import React from 'react';
import './App.scss';
import { Clock } from './components';

type State = {
  isClockVisible: boolean;
  clockName: number;
};

class App extends React.Component<React.FC<State>, State> {
  state: State = {
    isClockVisible: true,
    clockName: 0,
  };

  componentDidUpdate() {
    // eslint-disable-next-line no-console
    console.log(`Now clock name it ${this.state.clockName}`);
  }

  setRandomName = () => {
    if (this.state.isClockVisible) {
      this.setState({
        clockName: Math.floor(Math.random() * (100 - 0) + 0),
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
