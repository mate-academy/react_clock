import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

type State = {
  hasClock: boolean;
  clockName: string;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<{}, State> {
  state = {
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
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.handleRightClick);
    document.removeEventListener('click', this.handleLeftClick);
    window.clearInterval(this.nameTimerId);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && (
          <Clock
            clockName={this.state.clockName}
            hasClock={this.state.hasClock}
          />
        )}
      </div>
    );
  }
}
