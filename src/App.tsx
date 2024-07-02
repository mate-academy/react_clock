import React from 'react';
import './App.scss';
import ClockTime from './timeGetter/TimeGetter';

type State = {
  clockName: string;
  hasShowClock: boolean;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  // today = new Date();
  state: State = {
    clockName: 'Clock-0',
    hasShowClock: true,
  };
  timerId: number | undefined;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', (event: MouseEvent) => {
      event.preventDefault();
      this.setState({ hasShowClock: false });
    });

    document.addEventListener('click', (event: MouseEvent) => {
      event.preventDefault();
      this.setState({ hasShowClock: true });
    });
  }
  // This code starts a timer

  // this code stops the timer
  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  componentDidUpdate({}, prevState: State): void {
    if (
      this.state.hasShowClock &&
      prevState.clockName !== this.state.clockName
    ) {
      // eslint-disable-next-line no-console
      console.debug(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasShowClock && (
          <div className="Clock">
            <strong className="Clock__name">{this.state.clockName}</strong>

            {' time is '}
            <ClockTime />
          </div>
        )}
      </div>
    );
  }
}
