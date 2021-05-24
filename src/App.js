import React from 'react';
import { Clock } from './components/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    name: null,
  }

  hideClock = () => {
    this.setState({
      isClockVisible: false,
    });
  }

  showClock = () => {
    this.setState({
      isClockVisible: true,
    });
  }

  rename = () => {
    this.setState({
      name: (Math.random() * 100).toFixed(0),
    });
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {this.state.isClockVisible && <Clock name={this.state.name} />}

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
              onClick={this.rename}
            >
              Set random name
            </button>
          </div>
        </p>
      </div>
    );
  }
}

export default App;
