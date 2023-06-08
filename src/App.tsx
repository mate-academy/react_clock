import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  clockName: string,
  clockVisible: boolean,
};

export class App extends React.Component<{}, State> {
  state = {
    clockName: '0',
    clockVisible: true,
  };

  showClock = () => {
    this.setState({
      clockVisible: true,
    });
  };

  hideClock = () => {
    this.setState({
      clockVisible: false,
    });
  };

  getRandomName = () => {
    const newName = String(Math.floor(Math.random() * 100));

    this.setState({
      clockName: newName,
    });
  };

  render() {
    return (
      <div className="App" data-cy="clock">
        <h1>
          React Clock
        </h1>
        <button type="button" onClick={this.showClock}>
          Show Clock
        </button>
        <button type="button" onClick={this.hideClock}>
          Hide Clock
        </button>
        <button type="button" onClick={this.getRandomName}>
          Rename Clock
        </button>
        <div>
          {this.state.clockVisible
            && <Clock clockName={this.state.clockName} />}
        </div>
      </div>
    );
  }
}
