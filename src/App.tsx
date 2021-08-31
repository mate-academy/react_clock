import React, { Props } from 'react';
import './App.scss';
import Clock from './components/Clock';

type State = {
  isClockVisible: boolean;
  clockName: number;
};

class App extends React.Component<Props<State>, State> {
  state = {
    isClockVisible: false,
    clockName: 0,
  };

  componentDidMount() {
    this.setState({ isClockVisible: true });
  }

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
        <h1 className="App__title">
          React clock
        </h1>

        {isClockVisible ? (
          <Clock name={clockName} />
        ) : (
          <p className="App__hint">
            Press &quot;Show Clock&quot; button to see the clock
          </p>
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
