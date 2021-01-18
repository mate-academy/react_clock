import React from 'react';
import Clock from './Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: Math.random(),
  }

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <p>
          Current time:
          {' '}
          {isClockVisible && <Clock {...this.state} />}
        </p>
        {isClockVisible
          ? (
            <button
              type="button"
              onClick={() => this.setState({ isClockVisible: false })}
            >
              Hide Clock
            </button>

          )
          : (
            <button
              type="button"
              onClick={() => this.setState({ isClockVisible: true })}
            >
              Show Clock
            </button>
          )}

        <button
          type="button"
          onClick={() => {
            this.setState({ clockName: Math.random() });

            return <Clock name={this.state.clockName} />;
          }}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
