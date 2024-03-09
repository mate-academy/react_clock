import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

type State = {
  hasClock: boolean;
  currentClockName: string;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  state: State = {
    hasClock: true,
    currentClockName: 'Clock-0',
  };

  timerId = 0;

  clockName = this.state.currentClockName === 'Clock-0' ? 'Clock-0' : getRandomName();

  handelnClockNameChenger = (newName: string) => {
    this.setState({ currentClockName: newName });
    this.clockName =  newName;
  };

  handelnTimerStart = () => {
    this.timerId = window.setInterval(
      () => this.handelnClockNameChenger(getRandomName()), 3300);
  };

  handelnTimerStop = () => {
    window.clearInterval(this.timerId);
  }

  hendlerClockSwitcher = (value: boolean) => {
    this.setState({ hasClock: value });

    if (!this.state.hasClock) {
      this.handelnTimerStop();
    }
  };

  componentDidUpdate(prevState: Readonly<{currentClockName: string}>): void {
    console.log(prevState.currentClockName, this.state.currentClockName);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && (
          <Clock
            timerStart={this.handelnTimerStart}
            timerStop={this.handelnTimerStop}
            clockSwitcher={(value: boolean) => {
              this.hendlerClockSwitcher(value);
            }}
            hasClock={this.state.hasClock}
            currentClockName={this.clockName}
          />
        )}
      </div>
    );
  }
}
