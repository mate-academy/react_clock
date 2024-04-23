import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

type State = {
  time: Date;
  hasClock: boolean;
  clockName: string;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<{}, State> {
  state = {
    time: new Date(),
    hasClock: true,
    clockName: 'Clock-0',
  };

  randomClockName = () => {
    this.setState({ clockName: getRandomName() });
  };

  hideClock = () => {
    this.setState({ hasClock: false });
  };

  showClock = () => {
    this.setState({ hasClock: true });
  };

  timerId = 0;

  nameTimerId = 0;

  handleRightClick = (event: MouseEvent) => {
    event.preventDefault();

    this.hideClock();
  };

  handleLeftClick = () => {
    this.showClock();
  };

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handleRightClick);

    document.addEventListener('click', this.handleLeftClick);

    this.nameTimerId = window.setInterval(() => {
      this.randomClockName();
    }, 3300);

    this.timerId = window.setInterval(() => {
      if (this.state.hasClock) {
        // eslint-disable-next-line no-console
        console.log(new Date().toLocaleTimeString());
        this.setState({ time: new Date() });
      }
    }, 1000);
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
    window.clearInterval(this.timerId);
    window.clearInterval(this.nameTimerId);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && (
          <Clock
            time={this.state.time}
            clockName={this.state.clockName}
            hasClock={this.state.hasClock}
          />
        )}
      </div>
    );
  }
}
