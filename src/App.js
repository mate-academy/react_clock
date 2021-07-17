import React from 'react';

import { Clock } from './components/Clock';
import './App.scss';
// import { render } from 'node-sass';

export class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 'firstname',
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {this.state.isClockVisible && (<Clock name={this.state.clockName} />)}
        </p>
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
            this.setState({
              clockName: `Clock#${Math.floor(Math.random() * (1000 - 1) + 1)}`,
            });
          }}
        >
          Set random name
        </button>
      </div>
    );
  }
}
