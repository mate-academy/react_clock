import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

interface State {
  isClockVisible: boolean,
  clockName: number,
}

export class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
    clockName: 0,
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  setRandomName = () => {
    const oldName = this.state.clockName;

    this.setState({ clockName: Math.floor(Math.random() * 100) + 1 });
    setTimeout(() => {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${oldName} to ${this.state.clockName}`);
    }, 0);
  };

  render() {
    const { isClockVisible } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        <div className="clock">

          {isClockVisible && <Clock name={this.state.clockName} />}

          <button
            type="button"
            className="clock__button"
            onClick={this.showClock}
          >
            Show Clock
          </button>

          <button
            type="button"
            className="clock__button"
            onClick={this.hideClock}
          >
            Hide Clock
          </button>

          <button
            type="button"
            className="clock__button"
            onClick={this.setRandomName}
          >
            Set random name
          </button>
        </div>
      </div>
    );
  }
}

export default App;
