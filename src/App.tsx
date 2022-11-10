import React, { Component } from 'react';
import './App.scss';
import { Clock } from './Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  clockNameTimerId = 0;
  // eslint-disable-next-line
  componentWillMount(): void {
    this.clockNameTimerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('click', this.onClick);

    document.addEventListener('contextmenu', this.onContextMenuClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onClick);
    document.removeEventListener('contextmenu', this.onContextMenuClick);
    clearInterval(this.clockNameTimerId);
  }

  onClick = () => {
    this.setState({ hasClock: true });
  };

  onContextMenuClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  render(): React.ReactNode {
    const { hasClock, clockName } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && <Clock clockName={clockName} />}
      </div>
    );
  }
}
