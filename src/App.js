import React, { PureComponent } from 'react';
import { Clock } from './components/Clock';

import './App.scss';

class App extends PureComponent {
  state = {
    isClockVisible: true,
    clockName: 1,
  }

  displayClock = () => {
    this.setState(state => ({
      isClockVisible: !state.isClockVisible,
    }));
  }

  setRandomName = () => {
    const newName = Math.floor(Math.random() * 1000);

    // eslint-disable-next-line no-console
    console.log(`the Clock was renamed from
    ${this.state.clockName} to ${newName}`);
    this.setState({ clockName: newName });
  }

  render() {
    return (
      <div className="clock">
        <h1>React clock</h1>
        <div className="clock__inner">
          {this.state.isClockVisible && (<Clock name={this.state.clockName} />)}
          <button
            type="button"
            onClick={this.displayClock}
            className="clock__button"
          >
            Hide/Show Clock
          </button>
          <button
            type="button"
            onClick={this.setRandomName}
            className="clock__button"
          >
            Set new name
          </button>
        </div>
      </div>
    );
  }
}

export default App;
