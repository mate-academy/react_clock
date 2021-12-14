import React from 'react';
import './App.scss';

import { Clock } from './Components/Clock/Clock';

type State = {
  isClockVisible: boolean
};

class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
  };

  setClockVisibile(): void {
    this.setState({ isClockVisible: true });
  }

  setClockUnvisibil(): void {
    this.setState({ isClockVisible: false });
  }

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        <h2>React clock</h2>
        {isClockVisible && (
          <div className="App__clock clock">
            <h3>Current time:</h3>
            <div className="clock__time">
              <Clock />
            </div>
          </div>
        )}

        <button
          className="App__button"
          type="button"
          onClick={() => this.setClockUnvisibil()}
        >
          Hide Clock
        </button>

        <button
          className="App__button"
          type="button"
          onClick={() => this.setClockVisibile()}
        >
          Show Clock
        </button>
      </div>
    );
  }
}

export default App;
