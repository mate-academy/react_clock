import React from 'react';
import './App.scss';
import { Clock } from './Clock';

type State = {
  hasClock: boolean;
  name: string;
};

type Props = {};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<Props, State> {
  state = {
    hasClock: true,
    name: 'Clock-0',
  };

  timerId = 0;

  componentDidMount(): void {
    document.addEventListener('click', this.addClock);
    document.addEventListener('contextmenu', this.hideClock);

    this.timerId = window.setInterval(() => {
      this.setState({ name: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    clearInterval(this.timerId);

    document.addEventListener('click', this.addClock);
    document.addEventListener('contextmenu', this.hideClock);
  }

  addClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
  };

  hideClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  render(): React.ReactNode {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock name={this.state.name} />}
      </div>
    );
  }
}
