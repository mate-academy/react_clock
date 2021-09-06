import React, { Props } from 'react';
import Clock from './components/Clock/Clock';
import './App.scss';

type State = {
  isClockVisible: boolean;
  clockName: number;
};

class App extends React.Component<Props<State>, State> {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  setRandomName = () => {
    if (this.state.isClockVisible) {
      this.setState(prevState => {
        const newName = Math.trunc(Math.random() * 50 + 1);

        // eslint-disable-next-line no-console
        console.log(`The Clock was renamed from ${prevState.clockName} to ${newName}`);

        return {
          clockName: newName,
        };
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
        <h1 className="App__title">
          React clock
        </h1>

        {isClockVisible && (
          <Clock name={clockName} />
        )}

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
    );
  }
}

export default App;
