import React from 'react';
import './App.scss';

import { Clock } from './Clock';

function getRandomName(): string {
  return `Clock-${Date.now().toString().slice(-4)}`;
}

type State = {
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<{}, State> {
  private timerId?: ReturnType<typeof setInterval>;

  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  componentDidMount() {
    // This code starts a timer
    this.timerId = window.setInterval(() => {
      this.setState(prevState => ({
        ...prevState,
        clockName: getRandomName(),
      }));
    }, 3300);
  }

  componentWillUnmount() {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
