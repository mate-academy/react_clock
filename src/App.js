import React from 'react';

import './App.scss';
import { Clock } from './Clock';

class App extends React.Component {
  state = {
    isClockVisible: false,
    clockName: 0,
  }

  makeClockVisible = () => {
    this.setState({ isClockVisible: true });
  }

  makeClockNotVisible = () => {
    this.setState({ isClockVisible: false });
  }

  setRandomName = () => {
    this.setState({
      clockName: Math.floor(Math.random() * 101),
    });
  }

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <button
          type="button"
          onClick={this.makeClockVisible}
        >
          Show Clock
        </button>

        <button
          type="button"
          onClick={this.makeClockNotVisible}
        >
          Hide Clock
        </button>

        <button
          type="button"
          onClick={this.setRandomName}
        >
          Set random name
        </button>
        {isClockVisible && <Clock name={clockName} />}
      </div>
    );
  }
}

export default App;
