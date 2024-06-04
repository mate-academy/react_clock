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

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.body.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();

      this.setState({ hasClock: false });
    });

    // eslint-disable-next-line max-len
    document.body.addEventListener('click', () =>
      this.setState({ hasClock: true }),
    );
  }

  componentDidUpdate(_: {}, prevState: Readonly<State>): void {
    if (this.state.hasClock) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);

    // document.removeEventListener();
    // document.removeEventListener()
  }

  render() {
    return this.state.hasClock && <Clock name={this.state.clockName} />;
  }
}
