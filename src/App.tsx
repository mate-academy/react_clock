import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

type State = {
  hasClock: boolean,
  clockName: number,
};

class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 0,
  };

  randomClockName = setInterval(() => this.setState(
    { clockName: Math.floor(Math.random() * 300 + 1) },
  ), 3300);

  showClock = () => {
    this.setState({ hasClock: true });
  };

  hideClock = (event: React.MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  setRandomName = () => {
    if (!this.state.hasClock) {
      return;
    }

    this.setState({ clockName: Math.round(Math.random() * 1000) });
  };

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div
        className="App"
        onClick={this.showClock}
        onContextMenu={this.hideClock}
        onKeyDown={this.showClock}
        role="button"
        tabIndex={0}
      >
        <div className="App__clock">
          <h1 className="App__clock-title">
            {`React clock - ${clockName}`}
          </h1>

          <div className="clock-container">
            {hasClock && (
              <Clock name={clockName} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
