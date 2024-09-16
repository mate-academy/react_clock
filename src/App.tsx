import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type AppState = {
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<{}, AppState> {
  // const today = new Date();
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  clockNameId = 0;

  componentDidMount(): void {
    this.clockNameId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  }

  componentDidUpdate(
    _prevProps: Readonly<{}>,
    prevState: Readonly<AppState>,
  ): void {
    if (prevState.clockName !== this.state.clockName && this.state.hasClock) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  // this code stops the timer
  // window.clearInterval(timerId);

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
