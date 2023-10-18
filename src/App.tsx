import React from 'react';
import './App.scss';
import { Clock } from './Components/Clock';

type State = {
  hasClock: boolean,
  clockName: string,
};

export class App extends React.Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.hideClock);
    document.addEventListener('click', this.showClock);
    this.setClockNameTimer();
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  setClockNameTimer = () => {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: this.getRandomName() });
    }, 3300);
  };

  hideClock = (event: globalThis.MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  showClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
  };

  getRandomName = () => {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  };

  render(): React.ReactNode {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && (
          <Clock name={this.state.clockName} />
        )}
      </div>
    );
  }
}
