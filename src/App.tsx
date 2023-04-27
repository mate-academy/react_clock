import React from 'react';

import { Clock } from './components/Clock/Clock';

import './App.scss';

type AppState = {
  clockName: string;
  hasClock: boolean;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<{}, AppState> {
  state: Readonly<AppState> = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);

    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();

      if (this.state.hasClock) {
        this.setState({
          hasClock: false,
        });
      }
    });

    document.addEventListener('click', () => {
      if (!this.state.hasClock) {
        this.setState({
          hasClock: true,
        });
      }
    });
  }

  componentDidUpdate(_: {}, prevState: Readonly<AppState>) {
    const { clockName, hasClock } = this.state;

    if (prevState.clockName !== clockName && hasClock) {
      // eslint-disable-next-line no-console
      console.debug(`Renamed from ${prevState.clockName} to ${clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
  }

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
