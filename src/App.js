import React from 'react';
import Clock from './Components/Clock/Clock';

import './App.scss';

class App extends React.Component {
  state = {
    isClockVisible: true,
    name: 2,
  };

  render() {
    const { isClockVisible, name } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        <p className="clock">
          Current time:
          {isClockVisible && <Clock name={name} />}
        </p>
        <button
          type="button"
          onClick={() => {
            this.setState({
              isClockVisible: true,
            });
          }}
        >
          Show Clock
        </button>

        <button
          type="button"
          onClick={() => {
            this.setState({
              isClockVisible: false,
            });
          }}
        >
          Hide Clock
        </button>

        <button
          type="button"
          onClick={() => {
            this.setState({
              name: Math.random(),
            });
          }}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
