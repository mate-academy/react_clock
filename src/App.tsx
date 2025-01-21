import React from 'react';
import './App.scss';

import { Clock } from './components';

function getRandomName(): string {
  return `Clock-${Date.now().toString().slice(-4)}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
  today: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
    today: new Date().toUTCString().slice(-12, -4),
  };

  timerId = 0;

  secondsTimerId = 0;

  handleLeftClick = (): void => {
    this.setState({
      hasClock: true,
    });

    if (!this.secondsTimerId) {
      this.secondsTimerId = window.setInterval(() => {
        this.setState({ today: new Date().toUTCString().slice(-12, -4) });
      }, 1000);
    }
  };

  handleRightClick = (event: MouseEvent): void => {
    event.preventDefault();
    this.setState({ hasClock: false });

    if (this.secondsTimerId) {
      window.clearInterval(this.secondsTimerId);
      this.secondsTimerId = 0;
    }
  };

  componentDidMount(): void {
    document.addEventListener('click', this.handleLeftClick);
    document.addEventListener('contextmenu', this.handleRightClick);

    if (!this.secondsTimerId) {
      this.secondsTimerId = window.setInterval(() => {
        this.setState({ today: new Date().toUTCString().slice(-12, -4) });
      }, 1000);
    }

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentDidUpdate(_: {}, prevState: Readonly<State>): void {
    if (this.state.hasClock && prevState.clockName !== this.state.clockName) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
    window.clearInterval(this.timerId);
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
