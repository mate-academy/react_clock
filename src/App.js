import React from 'react';
import './App.scss';

import { Clock } from './Clock';

class App extends React.Component {
  state = {
    clockName: 0,
    isClockVisible: true,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.clockName !== this.state.clockName) {
    // eslint-disable-next-line no-console
      console.log(`The Clock was renamed from ${prevState.clockName}`
        + ` to ${this.state.clockName} newName.`);
    }
  }

  render() {
    const { clockName, isClockVisible } = this.state;
    const randomName = () => {
      this.setState({ clockName: Math.floor(Math.random() * 10000) });
    };

    const clockVisible = () => (this.setState({ isClockVisible: true }));

    const clockInvisible = () => (this.setState({ isClockVisible: false }));

    return (
      <div className="App">
        <h1>React clock</h1>
        { isClockVisible && <Clock name={clockName} /> }
        <button type="button" onClick={clockVisible}>
          Show time
        </button>
        <button type="button" onClick={clockInvisible}>
          Hide time
        </button>
        <button type="button" onClick={randomName}>
          Change Name
        </button>
      </div>
    );
  }
}

export default App;
