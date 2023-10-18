import React from 'react';
import './App.scss';
import { Clock } from './Components/Clock';

type State = {
  hasClock: boolean,
  clockName: string,
  timerId: number | undefined,
};

export class App extends React.Component<{}, State> {
  state = {
    hasClock: false,
    clockName: 'Clock-0',
    timerId: undefined,
  };

  componentDidMount(): void {
    this.setState({ hasClock: true });
    document.addEventListener('contextmenu', this.hideClock);
    document.addEventListener('click', this.showClock);
    this.setClockNameTimer();
  }

  setClockNameTimer = () => {
    this.setState({
      timerId: window.setInterval(() => {
        const curr = this.state.clockName;
        const newName = this.getRandomName();

        this.setState({ clockName: this.getRandomName() });
        // eslint-disable-next-line no-console
        console.debug(`Renamed from ${curr} to ${newName}`);
      }, 3300),
    });
  };

  hideClock = (event: globalThis.MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
    window.clearInterval(this.state.timerId);
  };

  showClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
    this.setClockNameTimer();
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
