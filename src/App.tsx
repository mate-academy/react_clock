import React from 'react';
import './App.scss';
import { Clock } from './Clock';

type State = {
  hasClock: boolean;
  clockName: string;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId: number | undefined;

  componentDidMount() {
    document.addEventListener('contextmenu', () => {
      this.setState({ hasClock: false });
    });
    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
    this.startClockUpdate();
  }

  componentDidUpdate(_prevProps: {}, prevState: State) {
    if (!prevState.hasClock && this.state.hasClock) {
      this.startClockUpdate();
    }

    if (prevState.hasClock && !this.state.hasClock) {
      clearInterval(this.timerId);
      this.timerId = undefined;
    }

    if (prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  startClockUpdate = () => {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
