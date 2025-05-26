import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  today: Date;
  clockName: string;
};

export class App extends React.Component<{}, State> {
  timeIntervalId?: number;

  nameIntervalId?: number;

  state: State = {
    hasClock: true,
    today: new Date(),
    clockName: 'Clock-0',
  };

  componentDidMount() {
    document.addEventListener('contextmenu', this.handleContextMenu);
    document.addEventListener('click', this.handleClick);

    this.startIntervals(); // Таймери завжди працюють!
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleClick);
    this.clearIntervals();
  }

  startIntervals = () => {
    this.timeIntervalId = window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);

    this.nameIntervalId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  };

  clearIntervals = () => {
    if (this.timeIntervalId) {
      clearInterval(this.timeIntervalId);
      this.timeIntervalId = undefined;
    }

    if (this.nameIntervalId) {
      clearInterval(this.nameIntervalId);
      this.nameIntervalId = undefined;
    }
  };

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleClick = () => {
    if (!this.state.hasClock) {
      this.setState(
        {
          hasClock: true,
          today: new Date(),
        },
        () => {
          // Примусово оновити today ще раз після показу Clock
          this.setState({ today: new Date() });
        },
      );
    }
  };

  render() {
    const { hasClock, today, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock clockName={clockName} today={today} />}
      </div>
    );
  }
}
