import React from 'react';
import { Clock } from './components/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
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

  setName = () => {
    this.setState({
      clockName: Math.round(Math.random() * 10),
    });
  }

  render() {
    return (
      <div className="state">
        {this.state.isClockVisible && (
          <Clock
            visible={this.state.isClockVisible}
            name={this.state.clockName}
          />
        )}

        <div>
          <button
            className="state__button"
            type="button"
            onClick={this.showClock}
          >
            Show clock
          </button>
          <button
            className="state__button"
            type="button"
            onClick={this.hideClock}
          >
            Hide clock
          </button>
          <button
            className="state__button"
            type="button"
            onClick={this.setName}
          >
            Set random name
          </button>
        </div>

      </div>
    );
  }
}

export default App;
