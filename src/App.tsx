/* eslint-disable no-console */
import React from 'react';
import './App.scss';

function getRandomName(oldName: string): string {
  if (oldName === 'Clock-0') {
    return 'Clock-4900';
  } else {
    const oldNumber = Number(oldName.slice(-4));
    const value = (oldNumber + 3300).toString().slice(-4);

    return `Clock-${value}`;
  }
}

type AppState = {
  hasClock: boolean;
  clockName: string;
  time: string;
};

export class App extends React.Component<{}, AppState> {
  state: AppState = {
    hasClock: true,
    clockName: 'Clock-0',
    time: '',
  };

  private timeTimerId: number | undefined;

  private nameTimerId: number | undefined;

  private handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();

    if (event.type === 'contextmenu') {
      this.setState({ hasClock: false }, () => {
        this.stopClockTimer();
        console.log('context tyk tyk');
      });
    } else if (event.type === 'click') {
      this.setState({ hasClock: true }, () => {
        this.startClockTimer();

        console.log('click tyk tyk');
      });
    }
  };

  componentDidMount(): void {
    this.startClockTimer();
    this.startNameTimer();
    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handleContextMenu);
  }

  componentWillUnmount(): void {
    this.stopClockTimer();
    this.stopNameTimer();
    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleContextMenu);
  }

  startClockTimer(): void {
    if (this.timeTimerId) {
      return;
    }

    this.timeTimerId = window.setInterval(() => {
      this.setState(
        {
          time: new Date().toUTCString().slice(-12, -4),
        },
        () => {
          if (this.state.hasClock) {
            // eslint-disable-next-line no-console
            console.log(this.state.time);
          }
        },
      );
    }, 1000);
  }

  stopClockTimer(): void {
    if (this.timeTimerId) {
      window.clearInterval(this.timeTimerId);
      this.timeTimerId = undefined;
    }
  }

  startNameTimer(): void {
    if (this.nameTimerId) {
      return;
    }

    this.nameTimerId = window.setInterval(() => {
      this.setState(prevState => {
        const oldName = prevState.clockName;
        const newName = getRandomName(oldName);

        if (prevState.hasClock) {
          // eslint-disable-next-line no-console
          console.warn(`Renamed from ${oldName} to ${newName}`);
        }

        return { clockName: newName };
      });
    }, 3300);
  }

  stopNameTimer(): void {
    if (this.nameTimerId) {
      window.clearInterval(this.nameTimerId);
      this.nameTimerId = undefined;
    }
  }

  // const today = new Date();

  // // This code starts a timer
  // const timerId = window.setInterval(() => {
  //   clockName = getRandomName();
  // }, 3300);

  // // this code stops the timer
  // window.clearInterval(timerId);

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && (
          <div className="Clock">
            <strong className="Clock__name">{this.state.clockName}</strong>

            {' time is '}

            <span className="Clock__time">{this.state.time}</span>
          </div>
        )}
      </div>
    );
  }
}
