import React, { Component } from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type State = {
  hasClock: boolean
  clockName: string;
};

type Props = { };

export class App extends Component<Props, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount() {
    document.addEventListener('contextmenu', this.hideClock);

    document.addEventListener('click', this.haveClock);

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: this.getRandomName() });
    }, 3300);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
    document.removeEventListener('contextmenu', this.hideClock);
    document.addEventListener('click', this.haveClock);
  }

  getRandomName = () => {
    const value = Date.now().toString().slice(-4);

    return `Clock-${value}`;
  };

  haveClock = () => {
    this.setState({ hasClock: true });
  };

  hideClock = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  render(): React.ReactNode {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
