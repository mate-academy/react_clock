import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        { this.state.isClockVisible && <Clock />}

        <button
          type="button"
          onClick={() => {
            this.setState(
              { isClockVisible: true },
            );
          }}
        >
          Show Clock
        </button>

        <button
          type="button"
          onClick={() => {
            this.setState(
              { isClockVisible: false },
            );
          }}
        >
          Hide Clock
        </button>

        <button type="button">
          Change name
        </button>
      </div>
    );
  }
}

export default App;
