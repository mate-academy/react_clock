import React from 'react';
import CLock from './Components/Clock';

import './App.scss';

export class App extends React.Component {
  state = {
    clockName: 1,
    isClockVisible: true,
  };

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {isClockVisible ? <CLock name={clockName} />
          : <p>The clock is stopped</p>}
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
          Hide clock
        </button>
        <button
          className="button"
          type="button"
          onClick={() => {
            this.setState({ clockName: Math.trunc(Math.random() * 100) });
          }}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
