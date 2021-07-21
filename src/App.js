import React from 'react';
import './App.scss';

import { Clock } from './Clock';

class App extends React.Component {
  state = {
    clockName: 0,
    isClockVisible: true,
  };

  componentDidUpdate(prevProps, prevState) {
    // eslint-disable-next-line no-console
    console.log(`The Clock was renamed from ${prevState.clockName}`
    + ` to ${this.state.clockName} newName.`);
  }

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        { isClockVisible && <Clock name={clockName} /> }
        <button
          type="button"
          onClick={
            () => {
              this.setState({ isClockVisible: true });
            }
          }
        >
          Show time
        </button>
        <button
          type="button"
          onClick={
            () => {
              this.setState({ isClockVisible: false });
            }
          }
        >
          Hide time
        </button>
        <button
          type="button"
          onClick={
            () => {
              this.setState({ clockName: Math.floor(Math.random() * 10000) });
            }
          }
        >
          Change Name
        </button>
      </div>
    );
  }
}

export default App;
