import React from 'react';

import './App.scss';
import { Clock } from './components';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 1,
  };

  showClock = () => this.setState({ isClockVisible: true });

  hideClock = () => this.setState({ isClockVisible: false });

  generateName = () => this.setState(
    { clockName: Math.ceil(Math.random() * 1000) },
  );

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <button
          type="button"
          onClick={this.showClock}
        >
          Show Clock
        </button>
        <button
          type="button"
          onClick={this.hideClock}
        >
          Hide Clock
        </button>
        <button
          type="button"
          onClick={this.generateName}
        >
          Set random name
        </button>
        {isClockVisible && <Clock clockName={clockName} />}
      </div>
    );
  }
}

export default App;
