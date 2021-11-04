import React from 'react';
import './App.scss';

import { Clock } from './components/Clock/Clock';

import { State } from './type/StateForApp';

class App extends React.Component {
  state: State = {
    isClockVisible: false,
    clockName: 0,
  };

  componentDidMount() {
    this.setState({ isClockVisible: true });
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.isClockVisible && (
          <Clock name={this.state.clockName} />
        )}
        <button
          type="button"
          onClick={() => this.setState({ isClockVisible: true })}
        >
          Show Clock
        </button>
        <button
          type="button"
          onClick={() => this.setState({ isClockVisible: false })}
        >
          Hide Clock
        </button>
        <button
          type="button"
          onClick={() => {
            const newName = Math.floor(Math.random() * 5);

            this.setState({ clockName: newName });
          }}
        >
          Set rundom name
        </button>
      </div>
    );
  }
}

export default App;
