import React from 'react';
import './App.scss';
import Clock from './component/Clock/Clock';

type Props = {};

interface State {
  isClockVisible: boolean,
}

class App extends React.Component<Props, State> {
  state = {
    isClockVisible: true,
  };

  toggleClock = (value: boolean) => {
    this.setState({ isClockVisible: value });
  };

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>
          React clock
        </h1>

        <p>
          Current time:
          {' '}
          {isClockVisible && <Clock />}
        </p>

        <button
          type="button"
          className="button"
          onClick={() => {
            this.toggleClock(!isClockVisible);
          }}
        >
          {
            isClockVisible
              ? 'Hide clock'
              : 'Show clock'
          }
        </button>
      </div>
    );
  }
}

export default App;
