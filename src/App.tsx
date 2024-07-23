import React from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  today: Date;
  clockName: string;
  hasClock: boolean;
};

export class App extends React.PureComponent<{}, State> {
  state: State = {
    today: new Date(),
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerToday = 0;

  componentDidMount(): void {
    window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    this.timerToday = window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);

    const rightClick = (event: MouseEvent) => {
      event.preventDefault();

      this.setState({ hasClock: false });
    };

    const leftClick = (event: MouseEvent) => {
      event.preventDefault();

      this.setState({ hasClock: true });
    };

    document.addEventListener('contextmenu', rightClick);

    document.addEventListener('click', leftClick);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerToday);
  }

  render() {
    const { today, hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        <Clock name={clockName} today={today} hasClock={hasClock} />
      </div>
    );
  }
}
