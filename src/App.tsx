import React from 'react';
import './App.scss';

import { Clock } from './components/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
  };

  timerOn = () => {
    this.setState({ isClockVisible: true });
  };

  timerOff = () => {
    this.setState({ isClockVisible: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.isClockVisible && <Clock />}

        <button type="button" onClick={this.timerOn}>
          Show Clock
        </button>

        <button type="button" onClick={this.timerOff}>
          Hide Clock
        </button>
      </div>
    );
  }
}

export default App;
