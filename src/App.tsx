import React, { Props } from 'react';
import './App.scss';

type State = {
  time: Date;
  isClockVisible: boolean;
  clockName: number;
};

class App extends React.Component<Props<State>, State> {
  state = {
    time: new Date(),
    isClockVisible: false,
    clockName: 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.state.time.toLocaleTimeString();
      this.setState({ time: new Date() });
    }, 1000);

    this.setState({ isClockVisible: true });
  }

  setRandomName = () => {
    this.setState(({ clockName }) => {
      const newName = Math.trunc(Math.random() * 10 + 1);

      // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${clockName} to ${newName}`);

      return {
        clockName: newName,
      };
    });
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  render() {
    const { time, isClockVisible, clockName } = this.state;
    const { setRandomName, hideClock, showClock } = this;

    return (
      <div className="App">
        <h1>React clock</h1>
        <h2>
          {clockName}
        </h2>
        {isClockVisible ? (
          <p>
            Current time:
            {' '}
            {time.toLocaleTimeString()}
            {// eslint-disable-next-line no-console
              console.log(time.toLocaleTimeString())
            }
          </p>
        ) : (
          <p>
            Press &quot;Show Clock&quot; button to see the clock
          </p>
        )}
        <button
          type="button"
          onClick={showClock}
        >
          Show Clock
        </button>
        <button
          type="button"
          onClick={hideClock}
        >
          Hide Clock
        </button>
        <button
          type="button"
          onClick={setRandomName}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
