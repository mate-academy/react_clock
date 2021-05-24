import React from 'react';

import { Clock } from './components/Clock';
import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: null,
  };

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

  randomName = () => {
    this.setState({
      clockName: `${Math.ceil(Math.random() * 100)}`,

    });
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <div>
          Current time:
          {' '}
          {this.state.isClockVisible && <Clock name={this.state.clockName} />}

          <div>
            <button
              type="button"
              onClick={this.showClock}
            >
              Show
            </button>
            {' '}
            <button
              type="button"
              onClick={this.hideClock}
            >
              Hide
            </button>
            {' '}
            <button
              type="button"
              onClick={this.randomName}
            >
              Set random name
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
