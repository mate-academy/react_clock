import React from 'react';
import { Clock } from './components';
import './App.scss';

type State = {
  isClockVisible: boolean;
  clockName: string | number;
};

export class App extends React.Component<{}, State> {
  state = {
    isClockVisible: true,
    clockName: 'React clock',
  };

  hideClock = () => {
    this.setState({ isClockVisible: false });
  };

  showClock = () => {
    this.setState({ isClockVisible: true });
  };

  setRandomNumber = () => {
    this.setState({ clockName: Math.ceil(Math.random() * 100) });
  };

  render() {
    return (
      <div className="App">
        {this.state.isClockVisible && <Clock clockName={this.state.clockName} />}
        <button type="button" onClick={this.setRandomNumber}>Set random name</button>
        <button type="button" onClick={this.showClock}>Show Clock</button>
        <button type="button" onClick={this.hideClock}>Hide Clock</button>
      </div>
    );
  }
}
