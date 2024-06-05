import React from 'react';
import './App.scss';
import { Clock } from './component/Clock';

export function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  hideClock = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  appearClock = () => {
    this.setState({ hasClock: true });
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', (event: MouseEvent) =>
      this.hideClock(event),
    );

    // eslint-disable-next-line max-len
    document.addEventListener('click', () => this.appearClock());
  }

  componentDidUpdate(_: {}, prevState: Readonly<State>): void {
    if (this.state.hasClock && prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);

    document.removeEventListener('contextmenu', this.hideClock);
    document.removeEventListener('click', this.appearClock);
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
