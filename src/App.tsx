import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  isVisible: boolean;
  clockName: number;
};

class App extends React.Component<{}, State> {
  state: State = {
    isVisible: true,
    clockName: 0,
  };

  hideClock = () => {
    this.setState({ isVisible: false });
  };

  showClock = () => {
    this.setState({ isVisible: true });
  };

  changeClockName = () => {
    const oldName = this.state.clockName;

    this.setState({ clockName: Math.round(Math.random() * 1000) });

    setTimeout(() => {
      // eslint-disable-next-line
      console.log(`The Clock was renamed from ${oldName} to ${this.state.clockName}`)
    }, 0);
  };

  render() {
    const { clockName, isVisible } = this.state;

    return (
      <div className="container">
        <div className="App">
          <h1>React clock</h1>
          {isVisible && <Clock clockName={clockName} />}
        </div>

        <button
          className="container__button"
          type="button"
          onClick={this.hideClock}
        >
          Hide Clock
        </button>

        <button
          className="container__button"
          type="button"
          onClick={this.showClock}
        >
          Show Clock
        </button>

        <button
          className="container__button"
          type="button"
          onClick={this.changeClockName}
        >
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
