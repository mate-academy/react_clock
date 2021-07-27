import React from 'react';

import Clock from './Clock';
import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: '1',
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  }

  hideClock = () => {
    this.setState({ isClockVisible: false });
  }

  renameClock = () => {
    this.setState({ clockName: `${Math.round(Math.random() * 10)}` });
  }

  render() {
    const { state, showClock, hideClock, renameClock } = this;

    return (
      <div className="App">
        <h1>React clock</h1>
        {state.isClockVisible && <Clock name={state.clockName} />}
        <button type="button" onClick={showClock}>
          Show Clock
        </button>
        <button type="button" onClick={hideClock}>
          Hide Clock
        </button>
        <button type="button" onClick={renameClock}>
          Raname Clock
        </button>
      </div>
    );
  }
}

export default App;
