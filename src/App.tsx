import React from 'react';
import { Clock } from './components/Clock';
import './App.scss';

type State = {
  clockName: string;
  today: Date;
  hasClock: boolean;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  state: State = {
    clockName: 'Clock-0',
    today: new Date(),
    hasClock: true,
  };

  timerIdClockName = 0;

  timerIdTime = 0;

  componentDidMount(): void {
    // This code starts a timer
    this.timerIdClockName = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    this.timerIdTime = window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);

    document.addEventListener('contextmenu', this.handleContextMenuClick);

    document.addEventListener('click', () => {
      this.setState({ hasClock: true });
    });
  }

  componentWillUnmount(): void {
    // this code stops the timer
    window.clearInterval(this.timerIdClockName);
    window.clearInterval(this.timerIdTime);

    document.removeEventListener('contextmenu', this.handleContextMenuClick);
  }

  handleContextMenuClick = (event: MouseEvent) => {
    event.preventDefault(); // not to show the context menu
    this.setState({ hasClock: false });
  };

  render() {
    const { clockName, today, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={clockName} currentTime={today} />}
      </div>
    );
  }
}
