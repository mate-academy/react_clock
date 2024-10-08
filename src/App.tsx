import React from 'react';

import './App.scss';
import { Clock } from './components/Clock';

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId2 = 0;

  handleClockHide = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  handleClockShow = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: true });
  };

  getRandomName(): string {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  }

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handleClockHide);
    document.addEventListener('click', this.handleClockShow);
    this.timerId2 = window.setInterval(() => {
      const currentName = this.getRandomName();

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
    window.clearInterval(this.timerId2);
    document.removeEventListener('contextmenu', this.handleClockHide);
    document.removeEventListener('click', this.handleClockShow);
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
};
