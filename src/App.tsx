import React from 'react';
import './App.scss';

import { Clock } from './Components/Clock/Clock';

type State = {
  isVisibleClock: boolean
};

class App extends React.Component<{}, State> {
  state: State = {
    isVisibleClock: true,
  };

  clockVisibility(isVisible: boolean): void {
    this.setState({ isVisibleClock: isVisible });
  }

  render() {
    const { isVisibleClock } = this.state;

    return (
      <div className="App">
        <h2>React clock</h2>
        {isVisibleClock && (
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
          onClick={() => this.clockVisibility(false)}
        >
          Hide Clock
        </button>

        <button
          className="App__button"
          type="button"
          onClick={() => this.clockVisibility(true)}
        >
          Show Clock
        </button>
      </div>
    );
  }
}

export default App;
