import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

type State = {
  hasClock: boolean;
  currentClockName: string;
};

export class App extends React.Component {
  state: State = {
    hasClock: true,
    currentClockName: 'Clock-0',
  };

  handelnClockNameChenger = (newName: string) => {
    this.setState({ currentClockName: newName });
  }

  hendlerClockSwitcher = (event: MouseEvent) => {
    event.preventDefault();

    if (this.state.hasClock) {
      this.setState({ hasClock: false });
    } else {
      this.setState({ hasClock: true });
    }
  };

  render() {
    return (
      <div className="App">
        <h1>React clock {this.state.currentClockName}</h1>
        {this.state.hasClock && (
          <Clock
            changeClockName={this.handelnClockNameChenger}
            changeClockStatus={this.hendlerClockSwitcher}
            currentClockName={this.state.currentClockName}
          />
        )}
      </div>
    );
  }
}
