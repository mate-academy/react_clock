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
      <div className="App">
        <h1>
          React clock
        </h1>
        <button type="button" onClick={this.showClock}>
          Show clock
        </button>
        <button type="button" onClick={this.hideClock}>
          Hide clock
        </button>
        <button type="button" onClick={this.getRandomName}>
          Rename clock
        </button>
        <div>
          {this.state.clockVisible && <Clock clockName={this.state.clockName} />}
        </div>
      </div>
    );
  }
}
