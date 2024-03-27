import React from 'react';
import { Clock } from './components/Clock';

import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface State {
  clockName: string;
  hasClock: boolean;
}

export class App extends React.Component<{}, State> {
  timerId = 0;

  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  handleContextMenu = (event: MouseEvent): void => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  handleClick = (): void => {
    this.setState({ hasClock: true });
  };

  componentDidMount(): void {
    document.addEventListener('click', this.handleClick);
    document.addEventListener('contextmenu', this.handleContextMenu);

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.handleClick);
    document.removeEventListener('contextmenu', this.handleContextMenu);

    window.clearInterval(this.timerId);
  }

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
