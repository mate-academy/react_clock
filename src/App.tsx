import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  isClockVisible: boolean,
  clockName: number,
};

class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
    clockName: 0,
  };

  showTime = () => {
    this.setState({ isClockVisible: true });
  };

  hideTime = () => {
    this.setState({ isClockVisible: false });
  };

  renameClock = () => {
    this.setState({ clockName: Math.round(Math.random() * 123) });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        <p>{`clockName: ${this.state.clockName}`}</p>
        <p>
          {'Current time: '}
          {this.state.isClockVisible && (
            <Clock name={this.state.clockName} />
          )}
        </p>

        <button type="button" onClick={this.showTime}>
          Show Clock
        </button>

        <button type="button" onClick={this.hideTime}>
          Hide Clock
        </button>

        <button type="button" onClick={this.renameClock}>
          Set random name
        </button>
      </div>
    );
  }
}

export default App;
