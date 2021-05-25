import React from 'react';

import './App.scss';
import Clock from './component/Clock';

class App extends React.Component {
  state = {
    isClockVisible: false,
    clockName: 'Clock',
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <button
          type="button"
          onClick={
          () => this.setState({ isClockVisible: true })}
        >
          Show Clock
        </button>
        <button
          type="button"
          onClick={
          () => this.setState({ isClockVisible: false })}
        >
          Hide Clock
        </button>
        <button
          type="button"
          onClick={
          () => this.setState({ clockName: Math.random() })}
        >
          Set random name
        </button>
        <p>
          Current time:
          {' '}
          {this.state.isClockVisible
            && <Clock name={this.state.clockName} />
          }
        </p>
      </div>
    );
  }
}

export default App;
