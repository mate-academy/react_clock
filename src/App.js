import React from 'react';
import { Clock } from './components/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
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
    // eslint-disable-next-line
    console.log(`Clock was renamed from oldName to ${this.state.clockName}`);
  }

  showClock = () => {
    this.setState({
      isClockVisible: true,
    });
  }

  render() {
    return (
      <div className="state">
        {this.state.isClockVisible && (
          <Clock
            name={this.state.clockName}
            showClock={this.showClock}
          />
        )}

        <div className="state__button-set">
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
            className="state__button state__button--name"
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
