import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  isClockVisible: boolean,
  name: number,
};

export class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
    name: 0,
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  setRandomName = () => {
    if (this.state.isClockVisible) {
      const oldName = this.state.name;

      this.setState({ name: Math.ceil(Math.random() * 1000) });
      setTimeout(() => {
        // eslint-disable-next-line
        console.log(`The Clock was renamed from ${oldName} to ${this.state.name}`);
      });
    }
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        <div className="clock">
          <div>{`Random name: ${this.state.name}`}</div>

          {this.state.isClockVisible && <Clock name={this.state.name} /> }

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
