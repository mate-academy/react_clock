import React from 'react';

import './App.scss';
import { Clock } from './Clock';

class App extends React.Component {
  state = {
    isClockVisible: false,
    clockName: 'Clock',
  };

  render() {
    return (
      <div className="App">
        <button
          type="button"
          onClick={
          () => this.setState({ clockName: Math.random() })
        }
        >
          Set Random Name
        </button>
        <button
          type="button"
          onClick={
          () => this.setState({ isClockVisible: true })
        }
        >
          Show Clock
        </button>
        <button
          type="button"
          onClick={
          () => this.setState({ isClockVisible: false })
        }
        >
          Hide Clock
        </button>
        <h1>React clock</h1>
        { this.state.isClockVisible ? (
          <Clock name={this.state.clockName} />
        ) : (<p />)
        }
      </div>
    );
  }
}

export default App;
