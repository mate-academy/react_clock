import React from 'react';
import { Clock } from './Clock/Clock';

import './App.scss';

export class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 'default name',
  }

  setButtonName = () => this.setState(
    { clockName: (Math.random() * 10).toFixed(3) },
  );

  show = () => this.setState({ isClockVisible: true });

  hide = () => this.setState({ isClockVisible: false });

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <span>
          Current time:
        </span>

        {' '}

        {this.state.isClockVisible ? (
          <span className="App__clock">
            <Clock name={this.state.clockName} />
          </span>
        ) : (null)}

        <br />
        <br />

        <button
          type="button"
          className="App__clock-button"
          onClick={this.state.isClockVisible ? this.hide : this.show}
        >
          {this.state.isClockVisible ? 'Hide Clock' : 'Show Clock'}
        </button>

        <br />
        <br />

        <button
          type="button"
          className="App__clock-button"
          onClick={this.setButtonName}
        >
          Set button random name
        </button>
      </div>
    );
  }
}

export default App;
