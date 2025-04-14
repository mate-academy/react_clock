import React from 'react';

import './App.scss';
import Clock from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type Props = {};

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<Props, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerIdName = 0;

  onContextMenu = (e: MouseEvent) => {
    e.preventDefault();
    this.setState({ hasClock: false });
  };

  onClick = (e: MouseEvent) => {
    e.preventDefault();

    if (!this.state.hasClock) {
      this.setState({ hasClock: true });
    }
  };

  startTimer = () => {
    this.timerIdName = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  };

  clearTimer = () => {
    window.clearInterval(this.timerIdName);
  };

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.onContextMenu);
    document.addEventListener('click', this.onClick);

    this.startTimer();
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.onContextMenu);
    document.removeEventListener('click', this.onClick);
    this.clearTimer();
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
