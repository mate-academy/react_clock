import React from 'react';
import './App.scss';
import Clock from './Clock';

type State = {
  isClockVisible: boolean;
  clockName: number;
};

class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
    clockName: 0,
  };

  setRandomName = () => {
    if (this.state.isClockVisible) {
      this.setState((prevState) => {
        const newName = Math.trunc(Math.random() * 10 + 1);

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
        <h1>React clock</h1>
        {isClockVisible && (
          <Clock name={clockName} />
        )}
        <div>
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
