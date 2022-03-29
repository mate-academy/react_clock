import React from 'react';

import { Clock } from './components/Clock/Clock';

import './App.scss';

type State = {
  isClockVisible: boolean,
};

class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
  };

  hideClock = () => {
    this.setState({
      isClockVisible: false,
    });
  };

  showClock = () => {
    this.setState({
      isClockVisible: true,
    });
  };

  render() {
    return (
      <div>
        <button type="button" onClick={this.hideClock}>
          Hide Clock
        </button>
        <button type="button" onClick={this.showClock}>
          Show Clock
        </button>
        {this.state.isClockVisible && <Clock />}
      </div>
    );
  }
}

export default App;
