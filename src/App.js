import React from 'react';
import { Clock } from './Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  }

  render() {
    return (
      <div>
        {this.state.isClockVisible
          ? <Clock {...this.state} />
          : <p>Clock is stoped</p>
        }
        <button
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: true });
          }}
        >
          Show Clock
        </button>
        <button
          type="button"
          onClick={() => {
            this.setState({ isClockVisible: false });
          }}
        >
          Hide Clock
        </button>
        <button
          type="button"
          onClick={() => {
            const name = Math.floor(Math.random() * 1000);

            this.setState({ clockName: name });
          }}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
