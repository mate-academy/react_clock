import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  today: Date;
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<{}, State> {
  state = {
    today: new Date(),
    hasClock: true,
    clockName: 'Clock-0',
  };

  clockNameTimerId: number | undefined;

  tickId: number | undefined;

  handleClick = () => {
    if (!this.state.hasClock) {
      this.setState({ hasClock: true, today: new Date() });
    }
  };

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    if (this.state.hasClock) {
      this.setState({ hasClock: false });
    }
  };

  // This code starts a timer
  componentDidMount() {
    this.clockNameTimerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    this.tickId = window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);

    document.addEventListener('click', this.handleClick);
    document.addEventListener('contextmenu', this.handleContextMenu);
  }

  componentDidUpdate(_prevProps: unknown, prevState: Readonly<State>) {
    const { today, hasClock, clockName } = this.state;

    if (!prevState.hasClock && hasClock) {
      window.clearInterval(this.tickId);

      this.tickId = window.setInterval(() => {
        this.setState({ today: new Date() });
      }, 1000);
    }

    if (hasClock && prevState.hasClock && prevState.today !== today) {
      // eslint-disable-next-line no-console
      console.log(this.state.today.toUTCString().slice(-12, -4));
    }

    if (hasClock && prevState.clockName !== clockName) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  // this code stops the timer
  componentWillUnmount() {
    if (this.clockNameTimerId !== undefined) {
      window.clearInterval(this.clockNameTimerId);
    }

    if (this.tickId !== undefined) {
      window.clearInterval(this.tickId);
    }

    document.removeEventListener('click', this.handleClick);
    document.removeEventListener('contextmenu', this.handleContextMenu);
  }

  render() {
    const { today, hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock ? <Clock clockName={clockName} today={today} /> : null}
      </div>
    );
  }
}
