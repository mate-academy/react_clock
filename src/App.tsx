import React from 'react';
import './App.scss';
import { Clock } from './Clock';

type State = {
  hasClock: boolean;
  clockName: string;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      const newClockName = getRandomName();

      this.setState({ clockName: newClockName });
    }, 3300);

    document.addEventListener('click', this.onLeftClick);
    document.addEventListener('contextmenu', this.onRightClick);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);
  }

  onLeftClick = (): void => {
    this.setState({ hasClock: true });
  };

  onRightClick = (event: MouseEvent): void => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  render(): React.ReactNode {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock
        && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
