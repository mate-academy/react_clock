/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable no-console */
import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

// This code starts a timer
// const timerId = window.setInterval(() => {
//   clockName = getRandomName();
// }, 3300);

// this code stops the timer
// window.clearInterval(timerId);

interface AppState {
  hasClock: boolean;
  clockName: string;
}

interface TimeState {
  today: Date;
  clockName: string;
}

interface TimeProps {
  clockName: string;
}

export class Time extends React.Component<TimeProps, TimeState> {
  state = {
    today: new Date(),
    clockName: this.props.clockName,
  };

  // const today = new Date();
  // let clockName = 'Clock-0';

  timerId = 0;

  timerId2 = 0;

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
      // clockName = getRandomName();
    }, 3300);

    this.timerId2 = window.setInterval(() => {
      this.setState({ today: new Date() });
      console.info(this.state.today.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(
    _prevProps: Readonly<{}>,
    prevState: Readonly<TimeState>,
    _snapshot?: unknown,
  ): void {
    if (prevState.clockName !== this.state.clockName) {
      console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
    window.clearInterval(this.timerId2);
    this.setState({ clockName: getRandomName() });
  }

  render() {
    const { today, clockName } = this.state;

    // this.setState({ clockName: 'test' });

    return (
      <div className="Clock">
        <strong className="Clock__name">
          {clockName}
        </strong>

        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}

export class App extends React.Component<{}, AppState> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  componentDidMount() {
    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.state.hasClock
        ? this.setState({ hasClock: !this.state.hasClock })
        : null;
      this.setState({ clockName: getRandomName() });
    });

    document.addEventListener('click', () => {
      !this.state.hasClock
        ? this.setState({ hasClock: !this.state.hasClock })
        : null;
    });
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {
          hasClock && (
            <Time clockName={clockName} />
          )
        }
      </div>
    );
  }
}
