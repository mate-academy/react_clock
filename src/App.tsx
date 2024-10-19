import React from 'react';

import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface State {
  clockName: string;
  hasClock: boolean;
}

export class App extends React.Component<State> {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  handleClockHide = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  handleClockShow = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: true });
  };

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handleClockHide);
    document.addEventListener('click', this.handleClockShow);

    this.timerId = window.setInterval(() => {
      const currentName = getRandomName();

      this.setState({ clockName: currentName });
    }, 3300);
  }

  componentDidUpdate(
    prevProps: Readonly<State>,
    prevState: Readonly<State>,
  ): void {
    if (prevState.clockName !== this.state.clockName && this.state.hasClock) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    document.removeEventListener('contextmenu', this.handleClockHide);
    document.removeEventListener('click', this.handleClockShow);
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
