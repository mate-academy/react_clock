import React from 'react';
import { Clock } from './components/Clock/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    name: 0,
  };

  setRandomName = () => {
    const oldName = this.state.name;
    const random = Math.floor(Math.random() * 100);

    this.setState({
      name: random,
    });
    // eslint-disable-next-line
    console.log(`The Clock was renamed from ${oldName} to ${random}`);
  }

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
    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {this.state.isClockVisible
            ? <Clock name={this.state.name} />
            : 'Clock is hidden'}
        </p>
        <div>
          <button type="button" onClick={() => this.showClock()}>
            Show Clock
          </button>
          <button type="button" onClick={() => this.hideClock()}>
            Hide Clock
          </button>
          <button type="button" onClick={this.setRandomName}>
            Set random name
          </button>
        </div>
      </div>
    );
  }
}

export default App;
