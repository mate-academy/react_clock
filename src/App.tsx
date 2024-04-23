import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

interface AppState {
  hasClock: boolean;
  today: Date;
  clockName: string;
}

export class App extends React.Component {
  state: AppState = {
    hasClock: true,
    today: new Date(),
    clockName: 'Clock-0',
  };

  toggleClock = (clock: boolean) => {
    this.setState({ hasClock: clock });
  };

  toggleName = (value: string) => {
    this.setState({ clockName: value });
  };

  toggleDate = (value: Date) => {
    this.setState({ today: value });
  };

  render() {
    const { hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <Clock
            toggleClock={this.toggleClock}
            toggleName={this.toggleName}
            toggleDate={this.toggleDate}
            name={this.state.clockName}
            date={this.state.today}
          />
        )}
      </div>
    );
  }
}
