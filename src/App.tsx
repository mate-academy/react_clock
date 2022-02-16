import React from 'react';
import './App.scss';
import { Clock } from './clock';

type Stete = {
  isClockVisible: boolean
};

class App extends React.Component {
  state: Stete = {
    isClockVisible: true,
  };

  render() {
    const { isClockVisible } = this.state;

    const showClock = () => {
      this.setState({ isClockVisible: true });
    };

    const hideClock = () => {
      this.setState({ isClockVisible: false });
    };

    return (
      <div className="App">
        <h1>React clock</h1>
        {isClockVisible && <Clock />}

        <button
          type="button"
          onClick={() => showClock()}
        >
          Show
        </button>
        <span> </span>
        <button
          type="button"
          onClick={() => hideClock()}
        >
          Hide
        </button>
      </div>
    );
  }
}

export default App;
