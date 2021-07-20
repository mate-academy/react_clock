import React from 'react';
import Clock from './Clock/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 'My clock',
  };

  changeClockVisibility = () => {
    this.setState({ isClockVisible: !this.state.isClockVisible });
  };

  setRandomName = () => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXY'
    + 'Zabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = 5;

    for (let i = 0; i < charactersLength; i += 1) {
      result += characters.charAt(Math.floor(Math.random()
      * charactersLength));
    }

    this.setState({ clockName: result });
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {this.state.isClockVisible && <Clock name={this.state.clockName} />}
        </p>

        <button type="button" onClick={this.changeClockVisibility}>
          Show Clock
        </button>
        <button type="button" onClick={this.changeClockVisibility}>
          Hide Clock
        </button>
        <button type="button" onClick={this.setRandomName}>
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
