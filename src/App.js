import React from 'react';

import './App.scss';
import { Clock } from './Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  }

  setName() {
    this.setState({ clockName: Math.ceil(Math.random() * 100) });
  }

  visibleOn() {
    this.setState({ isClockVisible: true });
  }

  visibleOff() {
    this.setState({ isClockVisible: false });
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.isClockVisible && <Clock name={this.state.clockName} />}
        <button
          type="button"
          onClick={() => this.visibleOn()}
        >
          Show Clock
        </button>
        <button
          type="button"
          onClick={() => this.visibleOff()}
        >
          Hide Clock
        </button>
        <button
          type="button"
          onClick={() => this.setName()}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
