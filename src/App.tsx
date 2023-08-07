/* eslint-disable @typescript-eslint/no-use-before-define */
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

interface AppState {
  hasClock: boolean;
  clockName: string;
}

interface TimeState {
  today: Date;
}

export class Time extends React.Component<{}, TimeState> {
  state = {
    today: new Date(),
  };

  timerId = 0;

  timerId2 = 0;

  componentDidMount() {
    this.timerId2 = window.setInterval(() => {
      this.setState({ today: new Date() });
      console.info(this.state.today.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.timerId);
    window.clearInterval(this.timerId2);
  }

  render() {
    const { today } = this.state;

    return (
      <>
        {' time is '}

        <span className="Clock__time">
          {today.toUTCString().slice(-12, -4)}
        </span>
      </>
    );
  }
}

export class App extends React.Component<{}, AppState> {
  static visable: false;

  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      this.state.hasClock
        ? this.setState({ hasClock: !this.state.hasClock })
        : null;
    });

    document.addEventListener('click', () => {
      !this.state.hasClock
        ? this.setState({ hasClock: !this.state.hasClock })
        : null;
    });

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentDidUpdate(
    _prevProps: Readonly<{}>,
    prevState: Readonly<AppState>,
    _snapshot?: unknown,
  ): void {
    if (prevState.clockName !== this.state.clockName && this.state.hasClock) {
      console.debug(`Renamed from ${prevState.clockName} to ${this.state.clockName}`);
    }
  }

  render() {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {
          hasClock && (
            <div className="Clock">
              <strong className="Clock__name">
                {clockName}
              </strong>

              {' time is '}

              <Time />
            </div>
          )
        }
      </div>
    );
  }
}
