import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
  prevClockName: string;
  hasBeenRenamed: boolean;
};

export class App extends React.Component<{}, State> {
  state: State = {
    clockName: 'Clock-0',
    prevClockName: 'Clock-0',
    hasClock: true,
    hasBeenRenamed: false,
  };

  timerId: number | undefined;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({
        prevClockName: this.state.clockName,
        clockName: getRandomName(),
        hasBeenRenamed: true,
      });
    }, 3300);

    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();
      this.setState({ hasClock: false });
    });

    document.addEventListener('click', () => {
      this.setState({ hasClock: true, hasBeenRenamed: false });
    });
  }

  componentDidUpdate() {
    if (
      this.state.hasClock &&
      this.state.hasBeenRenamed &&
      this.state.prevClockName !== this.state.clockName
    ) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${this.state.prevClockName} to ${this.state.clockName}`,
      );
    }
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
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
