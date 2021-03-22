import React from 'react';
import { Clock } from './components/Clock/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    name: 0,
  };

  setRandomName = () => {
    const randomName = Math.floor(Math.random() * 100);

    this.setState({
      name: randomName,
    });
  }

  showClock = () => {
    this.setState({
      isClockVisible: true,
    });
  }

  hideClock = () => {
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
          {
            this.state.isClockVisible
              ? <Clock name={this.state.name} />
              : 'Clock is hidden'
          }
        </p>
        <div className="buttons">
          <button
            type="button"
            onClick={this.showClock}
            className="show"
          >
            Show Clock
          </button>
          <button
            type="button"
            onClick={this.hideClock}
            className="hide"
          >
            Hide Clock
          </button>
          <button
            type="button"
            onClick={this.setRandomName}
            className="randomName"
          >
            Set random name
          </button>
        </div>
      </div>
    );
  }
}

export default App;
