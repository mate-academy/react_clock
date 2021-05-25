import React from 'react';

import './App.scss';
import Clock from './Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 'clock',
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

  setRandomName = () => {
    this.setState({
      clockName: `${Math.random()}`,
    });
  }

  render() {
    return (
      <>
        <div className="App">
          <h1>React clock</h1>
          <p>
            Current time:
            {' '}
            {this.state.isClockVisible && <Clock name={this.state.clockName} />}
          </p>
          <div>
            <button onClick={this.showClock} type="button">
              Show Clock
            </button>

            <button onClick={this.hideClock} type="button">
              Hide Clock
            </button>

            <button onClick={this.setRandomName} type="button">
              Set random name
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default App;
