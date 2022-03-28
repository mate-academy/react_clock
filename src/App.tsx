import React from 'react';
import './App.scss';
import { Clock } from './Clock';

class App extends React.Component {
  state = {
    isClockVisible: false,
    clockName: 0,
  };

  setClockVisible = () => this.setState({ isClockVisible: true });

  setClockHidden = () => this.setState({ isClockVisible: false });

  generateClockName = () => this.setState({ clockName: Math.floor(Math.random() * 100) });

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.isClockVisible && (
          <Clock name={this.state.clockName} />
        )}

        <button
          type="button"
          onClick={this.setClockVisible}
        >
          Show Clock
        </button>

        <button
          type="button"
          onClick={this.setClockHidden}
        >
          Hide Clock
        </button>

        <button
          type="button"
          onClick={this.generateClockName}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
