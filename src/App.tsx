/* eslint-disable no-console */
import React from 'react';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  state = {
    clock: '',
    hasClock: true,
    clockName: 'Clock-0',
    today: new Date(),
  };

  timerId = 0;

  timerName = 0;

  handelAddEvent = (event: Event) => {
    if (event) {
      this.setState({ hasClock: true });
    }
  };

  handelRemoveEvent = (event: Event) => {
    event.preventDefault();
    if (event) {
      this.setState({ hasClock: false });
    }
  };

  componentDidMount(): void {
    document.addEventListener('click', this.handelAddEvent);
    document.addEventListener('contextmenu', this.handelRemoveEvent);

    if (this.state.hasClock) {
      setInterval(() => {
        this.setState({ today: new Date() });
        if (this.state.hasClock) {
          console.log(this.state.today.toUTCString().slice(-12, -4));
        }
      }, 1000);

      // setInterval(() => {
      //   console.log(this.state.today.toUTCString().slice(-12, -4));
      // }, 1000);

      this.timerName = window.setInterval(() => {
        this.setState({ clockName: getRandomName() });
      }, 3300);
    }
  }

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<{
      today: Date;
      hasClock: boolean;
      clockName: string;
      clock: string;
    }>,
  ): void {
    if (prevState.hasClock !== this.state.hasClock) {
      if (!this.state.hasClock) {
        window.clearInterval(this.timerId);
        window.clearInterval(this.timerName);
        console.log('Clock stopped');
      } else {
        this.timerId = window.setInterval(() => {
          this.setState({ today: new Date() });
        }, 1000);

        this.timerName = window.setInterval(() => {
          this.setState({ clockName: getRandomName() });
        }, 3300);
      }
    }

    if (prevState.clockName !== this.state.clockName) {
      console.warn(
        `Renamed from ${prevState.clockName} to ${this.state.clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
    window.clearInterval(this.timerName);
    document.removeEventListener('click', this.handelAddEvent);
    document.removeEventListener('contextmenu', this.handelRemoveEvent);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && (
          <div className="Clock">
            <strong className="Clock__name">{this.state.clockName}</strong>

            {' time is '}
            <span className="Clock__time">
              {this.state.today.toUTCString().slice(-12, -4)}
            </span>
          </div>
        )}
      </div>
    );
  }
}
