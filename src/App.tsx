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
        <h1>React clock</h1>

        <button
          className="App__button"
          type="button"
          onClick={() => this.isClockSet(true)}
        >
          Show Clock
        </button>

        <button
          className="App__button"
          type="button"
          onClick={() => this.isClockSet(false)}
        >
          Hide Clock
        </button>

        {isClock && (
          <div>
            Current time:
            {' '}
            <Clock />
          </div>
        )}
      </div>
    );
  }
}

export default App;
