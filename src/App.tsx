import React from 'react';
import './App.scss';

import { Clock } from './components/Clock';

class App extends React.Component {
  state = {
    isClock: true,
  };

  isClockSet(isVisible: boolean): void {
    this.setState({ isClock: isVisible });
  }

  render() {
    const { isClock } = this.state;

    return (
      <div className="App">
        <h2>React clock</h2>
        {isClock && (
          <div className="App__clock clock">
            <h3>Current time:</h3>
            {' '}
            <div className="clock__time">
              <Clock />
            </div>
          </div>
        )}

        <button
          className="App__button"
          type="button"
          onClick={() => this.isClockSet(false)}
        >
          Hide Clock
        </button>

        <button
          className="App__button"
          type="button"
          onClick={() => this.isClockSet(true)}
        >
          Show Clock
        </button>
      </div>
    );
  }
}

export default App;
