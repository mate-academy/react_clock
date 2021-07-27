import React from 'react';

import './App.scss';
import { Clock } from './components/Clock';

class App extends React.Component {
  state = {
    isClockVisible: false,
    clockName: 1,
  };

  render() {
    const { clockName } = this.state;

    return (
      <div className="App">
        <h1 className="title">React clock</h1>

        <div className="current-time">
          {`Current time: `}
          {this.state.isClockVisible
          && (<Clock name={clockName} />)}
        </div>

        <div className="button-container">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              this.setState({ isClockVisible: true });
            }}
          >
            Show Clock
          </button>

          <button
            className="btn btn-secondary"
            type="button"
            onClick={() => {
              this.setState({ isClockVisible: false });
            }}
          >
            Hide Clock
          </button>

          <button
            className="btn btn-light"
            type="button"
            onClick={() => {
              this.setState({ clockName: Math.floor(Math.random() * 101) });
            }}
          >
            Set random name
          </button>
        </div>
      </div>
    );
  }
}

export default App;
