import React from 'react';

import './App.scss';
import { Clock } from './components/Clock/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    name: 'Name',
  }

  showClock = () => {
    this.setState(() => ({
      isClockVisible: true,
    }));
  };

  hideClock = () => {
    this.setState(() => ({
      isClockVisible: false,
    }));
  };

  randomName = () => {
    this.setState(() => ({
      name: `Name ${Math.round(Math.random() * 100)}`,
    }));
  };

  render() {
    const { isClockVisible, name } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {isClockVisible && <Clock name={name} />}
        </p>
        <div className="App__buttons">
          <button type="button" onClick={this.showClock}>
            <div>Show Clock</div>
          </button>
          <button type="button" onClick={this.hideClock}>
            <div>Hide Clock</div>
          </button>
          <button type="button" onClick={this.randomName}>
            <div>Set Random Name</div>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
