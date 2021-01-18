import React from 'react';

import './App.scss';

import Clock from './components/Clock';
class App extends React.Component {
  state = {
    isClockVisible: true,
    clockName: 0,
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  makeRandomName  = () => {
    let oldName = this.state.clockName;

    this.setState({ clockName: Date.now() });

    setTimeout(() => {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${oldName} to ${this.state.clockName}`);
    }, 0);
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="Clock">
        <h1>React clock</h1>

        <p>
          Current time: {isClockVisible && (<Clock name={clockName} />)}
        </p>

        <div className="Clock__buttons">
          <button
            type="button"
            onClick={this.showClock}
          >
            Show Clock
          </button>

          <button
            type="button"
            onClick={this.hideClock}
          >
            Hide Clock
          </button>

          <button
            type="button"
            onClick={this.makeRandomName}
          >
            Set random name
          </button>
        </div>
      </div>
    );
  }
}

export default App;
