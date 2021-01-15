import React from 'react';

import './App.scss';
import { Clock } from './components/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  }

  clockVisibilityFalse = () => {
    this.setState({ isClockVisible: false });
  }

  clockVisibilityTrue = () => {
    this.setState({ isClockVisible: true });
  }

  renameClock = () => {
    this.setState({ clockName: Math.round(Math.random() * 10) });
  }

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {isClockVisible ? <Clock name={clockName} /> : ''}

        <div className="container">
          <button
            type="button"
            onClick={this.clockVisibilityTrue}
            className="button"
          >
            Show Clock
          </button>
          <button
            type="button"
            onClick={this.clockVisibilityFalse}
            className="button"
          >
            Hide Clock
          </button>
          <button
            type="button"
            onClick={this.renameClock}
            className="button"
          >
            Rename Clock
          </button>
        </div>
      </div>
    );
  }
}

export default App;
