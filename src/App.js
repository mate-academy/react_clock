import React from 'react';

import './App.scss';
import { Clock } from './components/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 'Clock name: 0',
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

  randomName() {
    this.setState({
      clockName: `Clock name: ${Math.floor(Math.random() * 100)}`,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <button
          className="App__btn"
          type="button"
          onClick={() => this.showClock()}
        >
          Show Clock
        </button>
        <button
          className="App__btn"
          type="button"
          onClick={() => this.hideClock()}
        >
          Hide Clock
        </button>
        <button
          className="App__btn"
          type="button"
          onClick={() => this.randomName()}
        >
          Set random name
        </button>
        <p>
          {this.state.isClockVisible
          && <Clock clockName={this.state.clockName} />}
        </p>
      </div>
    );
  }
}

export default App;
