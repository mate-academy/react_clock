import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type Props = {};

type State = {
  isClockVisible: boolean;
};

class App extends React.Component<Props, State> {
  state = {
    isClockVisible: true,
  };

  showClock() {
    this.setState({
      isClockVisible: true,
    });
  }

  hideClock() {
    this.setState({
      isClockVisible: false,
    });
  }

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {isClockVisible && <Clock />}

        <button
          type="button"
          onClick={() => {
            this.showClock();
          }}
        >
          Show Clock
        </button>

        <button
          type="button"
          onClick={() => {
            this.hideClock();
          }}
        >
          Hide Clock
        </button>
      </div>
    );
  }
}

export default App;
