import React from 'react';

import './App.scss';
import Clock from './Clock';

class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 'React clock',
  }

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <div className="App">
        <h1 className="App__name">{clockName}</h1>

        {isClockVisible && <Clock name={clockName} />}

        <div className="App__buttons">
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
              this.setState({ clockName: (Math.random() * 100).toFixed(0) });
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
