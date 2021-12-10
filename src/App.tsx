import React from 'react';
import './App.scss';

import { Clock } from './components/Clock';

type State = {
  isClockVisible: boolean;
};

class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
  };

  isClockSet(isVisible: boolean): void {
    this.setState({ isClockVisible: isVisible });
  }

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        <button
          className="App__button"
          type="button"
          onClick={() => this.isClockSet(true)}
          disabled={isClockVisible}
        >
          Show Clock
        </button>

        <button
          className="App__button"
          type="button"
          onClick={() => this.isClockSet(false)}
          disabled={!isClockVisible}
        >
          Hide Clock
        </button>

        {isClockVisible && (
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
