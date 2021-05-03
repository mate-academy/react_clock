import React from 'react';

import './App.scss';
import { Clock } from './components/Clock';

class App extends React.Component {
  state = {
    isClockHidden: false,
    clockName: 1,
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
        </p>
        <Clock
          isHidden={this.state.isClockHidden}
          name={this.state.clockName}
        />
        <button
          type="button"
          onClick={() => {
            this.setState({ isClockHidden: false });
          }}
        >
          Show Clock
        </button>
        <button
          type="button"
          onClick={() => {
            this.setState({ isClockHidden: true });
          }}
        >
          Hide Clock
        </button>
        <button
          type="button"
          onClick={() => {
            this.setState({ clockName: Math.random() });
          }}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
