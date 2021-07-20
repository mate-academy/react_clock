import React from 'react';
import CLock from './Components/Clock';

import './App.scss';

export class App extends React.Component {
  state = {
    clockName: 1,
    isClockVisible: true,
  };

  showCLock = () => {
    this.setState({ isClockVisible: true });
  }

  hideCLock = () => {
    this.setState({ isClockVisible: false });
  }

  changeName = () => {
    this.setState({ clockName: Math.trunc(Math.random() * 100) });
  }

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {
          isClockVisible
            ? <CLock name={clockName} />
            : <p>The clock is stopped</p>
        }
        <button
          type="button"
          onClick={this.showCLock}
        >
          Show Clock
        </button>
        <button
          type="button"
          onClick={this.hideCLock}
        >
          Hide clock
        </button>
        <button
          className="button"
          type="button"
          onClick={this.changeName}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
