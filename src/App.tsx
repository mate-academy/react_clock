import React from 'react';
import './App.scss';

interface State {
  rightClick: boolean;
  time: string;
  clockName: string;
}

export class App extends React.Component<{}, State> {
  private timeIntervalId: number | null = null;

  private nameIntervalId: number | null = null;

  private prevClockName: string = 'Clock-0';

  private lastLoggedTime: string = '';

  state: State = {
    rightClick: false,
    time: new Date().toUTCString().slice(-12, -4),
    clockName: 'Clock-0',
  };

  getRandomName(): string {
    const value = new Date().getTime().toString().slice(-4);

    return `Clock-${value}`;
  }

  updateTime = () => {
    const newTime = new Date().toUTCString().slice(-12, -4);

    if (newTime !== this.state.time) {
      this.setState({ time: newTime });
      if (newTime !== this.lastLoggedTime && !this.state.rightClick) {
        // eslint-disable-next-line no-console
        console.log(newTime);
        this.lastLoggedTime = newTime;
      }
    }
  };

  updateClockName = () => {
    const newClockName = this.getRandomName();

    if (!this.state.rightClick) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${this.prevClockName} to ${newClockName}`);
      this.prevClockName = newClockName;
      this.setState({ clockName: newClockName });
    }
  };

  startIntervals = () => {
    this.clearIntervals();
    this.timeIntervalId = window.setInterval(this.updateTime, 1000);
    this.nameIntervalId = window.setInterval(this.updateClockName, 3300);
    this.updateTime();
  };

  clearIntervals = () => {
    if (this.timeIntervalId) {
      clearInterval(this.timeIntervalId);
    }

    if (this.nameIntervalId) {
      clearInterval(this.nameIntervalId);
    }
  };

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ rightClick: true }); // очищаємо таймери після зміни
  };

  handleClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ rightClick: false }); // запускаємо з нуля після зміни
  };

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handleClick);
    this.startIntervals();
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleClick);
    this.clearIntervals();
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {!this.state.rightClick && (
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
