import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

export interface State {
  clockName: string;
  hasClock: boolean;
}

export class App extends React.Component<State> {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  hideHasClockHandler = (e: MouseEvent) => {
    e.preventDefault();

    this.setState({ hasClock: false });
  };

  showHasClockHandler = (e: MouseEvent) => {
    e.preventDefault();

    this.setState({ hasClock: true });
  };

  getRandomName(): string {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  }

  componentDidMount() {
    document.addEventListener('contextmenu', this.hideHasClockHandler);
    document.addEventListener('click', this.showHasClockHandler);

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: this.getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('contextmenu', this.hideHasClockHandler);
    document.removeEventListener('click', this.showHasClockHandler);
    window.clearInterval(this.timerId);
  }

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && <Clock name={clockName} />}
      </div>
    );
  }
}
