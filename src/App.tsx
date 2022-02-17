import React from 'react';
import { Clock } from './Clock';
import './App.scss';

type Props = {};

type State = {
  isClockVisible: boolean;
  clockName: string;
};

class App extends React.Component<Props, State> {
  state = {
    isClockVisible: true,
    clockName: '',
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    const showClock = () => {
      this.setState({ isClockVisible: true });
    };

    const hideClock = () => {
      this.setState({ isClockVisible: false });
    };

    const pickName = () => {
      const names = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

      const newName = names[Math.floor(Math.random() * names.length)];

      this.setState({ clockName: newName });
    };

    return (
      <div className="App">
        <h1>React clock</h1>
        <p className="App_title">
          <span className="App_time">Current time:</span>
          {' '}
          {isClockVisible && (
            <Clock name={clockName} />
          )}
        </p>

        <button
          type="button"
          className="show button"
          onClick={showClock}
        >
          Show Clock
        </button>

        <button
          type="button"
          className="hide button"
          onClick={hideClock}
        >
          Hide Clock
        </button>

        <button
          type="button"
          className="set button"
          onClick={pickName}
        >
          Set random Name
        </button>
      </div>
    );
  }
}

export default App;
