import React from 'react';
import './App.scss';

interface AppState {
  hasClock: boolean;
  clockName: string;
  time: string;
}

// function getRandomName(): string {
//   const value = Date.now().toString().slice(-4);
//   return `Clock-${value}`;
// }

function getRandomName(oldName: string): string {
  if (oldName === 'Clock-0') {
    return 'Clock-4900';
  } else {
    const oldNumber = Number(oldName.slice(-4));
    const value = (oldNumber + 3300).toString().slice(-4);

    return `Clock-${value}`;
  }
}

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
      });
    } else if (event.type === 'click') {
      this.setState({ hasClock: true }, () => {
        this.startClockTimer();
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

    this.setState({
      time: new Date().toUTCString().slice(-12, -4),
    });

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

    this.stopNameTimer();

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
