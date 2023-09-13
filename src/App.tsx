import React from 'react';
import './App.scss';
import { Clock } from './Components/Clock';

interface AppState {
  today: Date;
  hasClock: boolean;
  clockName: string;
}

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<{}, AppState> {
  state: AppState = {
    today: new Date(),
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  clockNameTimerId = 0;

  componentDidMount() {
    this.startTimers();

    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleContextMenu);
  }

  handleClick = (event: MouseEvent) => {
    event.preventDefault();
    const newClockName = getRandomName();

    this.setState({ hasClock: true, clockName: newClockName });
    this.startTimers();
    this.updateTimeImmediately();
  };

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
    this.stopTimers();
  };

  startTimers() {
    this.timerId = window.setInterval(() => {
      const newToday = new Date();
      const infoMessage = newToday.toUTCString().slice(-12, -4);

      this.setState(() => ({ today: newToday }));

      // eslint-disable-next-line no-console
      console.info(infoMessage);
    }, 1000);

    this.clockNameTimerId = window.setInterval(() => {
      const newClockName = getRandomName();

      if (this.state.clockName !== newClockName) {
        // eslint-disable-next-line no-console
        console.debug(
          `Renamed from ${this.state.clockName} to ${newClockName}`,
        );

        this.setState({ clockName: newClockName });
      }
    }, 3300);
  }

  stopTimers() {
    window.clearInterval(this.timerId);
    window.clearInterval(this.clockNameTimerId);
  }

  updateTimeImmediately() {
    this.setState(() => {
      const newToday = new Date();

      return { today: newToday };
    });
  }

  render() {
    const { today, hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={clockName} today={today} />}
      </div>
    );
  }
}
