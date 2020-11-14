import React from 'react';
import { Clock } from './components/Clock/Clock';

import './App.scss';

export class App extends React.Component {
  state = {
    clockName: 1,
    isClockVisible: false,
  };

  showClockHandler = () => {
    this.setState({
      isClockVisible: true,
    });
  }

  hideClockHandler = () => {
    this.setState({
      isClockVisible: false,
    });
  }

  toggleClockHandler = () => {
    this.setState(
      state => ({ isClockVisible: !state.isClockVisible }),
    );
  }

  randomClockName = () => {
    const newClockName = parseInt(Math.random() * 228, 10);

    this.setState({ clockName: newClockName });
    // console.log(`The Clock was renamed from
    // ${this.state.clockName} to ${newClockName}`);
  }
  // setInterval(() => {
  //   const date = new Date();

  //   // eslint-disable-next-line
  //   console.log(date.toLocaleTimeString());
  // }, 1000);

  render() {
    const { clockName, isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>
          React clock #
          {clockName}
        </h1>
        <button
          type="button"
          onClick={this.showClockHandler}
        >
          Show Clock
        </button>
        <button
          type="button"
          onClick={this.hideClockHandler}
        >
          Hide Clock
        </button>
        <button
          type="button"
          onClick={this.toggleClockHandler}
        >
          {isClockVisible ? 'Hide Clock' : 'Show Clock'}
        </button>
        <button
          type="button"
          onClick={this.randomClockName}
        >
          Set random name
        </button>
        {isClockVisible && <Clock name={clockName} />}
      </div>
    );
  }
}

export default App;
