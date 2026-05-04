/* eslint-disable max-len */
import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  hasClock: boolean;
  clockName: string;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  clockNameTimerId = 0;

  componentDidMount(): void {
    this.clockNameTimerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault(); // not to show the context menu

      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => this.setState({ hasClock: true }));
  }

  componentDidUpdate(_: Readonly<{}>, prevState: Readonly<State>): void {
    if (this.state.hasClock && prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.clockNameTimerId);
  }

  render(): React.ReactNode {
    const { hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}
