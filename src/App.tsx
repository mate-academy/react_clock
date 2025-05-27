import React from 'react';
import './App.scss';
import { Clock } from './Clock';

export type State = {
  today: Date;
  clockName: string;
  hasClock: boolean;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    today: new Date(),
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId: number | undefined;

  clockId: number | undefined;

  handleHideClock = (event: React.MouseEvent) => {
    event.preventDefault();

    this.setState({
      hasClock: false,
    });
  };

  handleShowClock = () => {
    this.setState({
      hasClock: true,
    });
  };

  getRandomName = () => {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  };

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      if (!this.state.hasClock) {
        return;
      }

      const newTime = new Date();

      // eslint-disable-next-line no-console
      console.log(`${newTime}`);

      this.setState({
        today: newTime,
      });
    }, 1000);

    this.clockId = window.setInterval(() => {
      if (!this.state.hasClock) {
        return;
      }

      const newName = this.getRandomName();

      // eslint-disable-next-line no-console
      console.log(`Renamed from ${this.state.clockName} to ${newName}`);

      this.setState({ clockName: newName });
    }, 3300);

    document.addEventListener('contextmenu', this.handleHideClock);
    document.addEventListener('click', this.handleShowClock);
  }

  componentWillUnmount(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
    }

    if (this.clockId) {
      clearInterval(this.clockId);
    }

    document.removeEventListener('contextmenu', this.handleHideClock);
    document.removeEventListener('click', this.handleShowClock);
  }

  render() {
    const { today, clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock today={today} clockName={clockName} />}
      </div>
    );
  }
}
