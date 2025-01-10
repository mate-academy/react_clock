/* eslint-disable no-console */
import React from 'react';
import { Clock } from './Clock';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  today: string;
  clockName: string;
  hasClock: boolean;
};

export class App extends React.PureComponent<{}, State> {
  state: State = {
    today: new Date().toUTCString().slice(-12, -4),
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId: number | null = null;

  clockLive: number | null = null;

  visibleRight: ((event: MouseEvent) => void) | null = null;

  visibleLeft: ((event: MouseEvent) => void) | null = null;

  componentDidMount(): void {
    this.clockLive = window.setInterval(() => {
      this.setState({ today: new Date().toUTCString().slice(-12, -4) });
    }, 1000);

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    this.visibleRight = (event: MouseEvent) => {
      event.preventDefault();
      this.setState({ hasClock: false }, () => {
        if (this.clockLive) {
          window.clearInterval(this.clockLive);
          this.clockLive = null;
        }
      });
    };

    this.visibleLeft = () => {
      this.setState(
        { hasClock: true, today: new Date().toUTCString().slice(-12, -4) },
        () => {
          if (!this.clockLive) {
            this.clockLive = window.setInterval(() => {
              this.setState({ today: new Date().toUTCString().slice(-12, -4) });
            }, 1000);
          }
        },
      );
    };

    document.addEventListener('contextmenu', this.visibleRight);
    document.addEventListener('click', this.visibleLeft);
  }

  componentWillUnmount(): void {
    if (this.timerId) {
      window.clearInterval(this.timerId);
    }

    if (this.clockLive) {
      window.clearInterval(this.clockLive);
    }
  }

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<State>,
  ): void {
    const { today, clockName, hasClock } = this.state;

    if (hasClock && prevState.today !== today && prevState.hasClock) {
      console.log(today);
    }

    if (prevState.clockName !== clockName && hasClock && prevState.hasClock) {
      console.warn(`Renamed from ${prevState.clockName} to ${clockName}`);
    }
  }

  render() {
    const { today, clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock name={clockName} time={today} />}
      </div>
    );
  }
}
