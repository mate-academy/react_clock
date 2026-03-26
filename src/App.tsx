import React from 'react';
import './App.scss';
import { Clock } from './clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<{}, State> {
  state = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  handleLeftClick = () => {
    this.setState({ hasClock: true });
  };

  intervalId: number | undefined;

  componentDidMount(): void {
    this.intervalId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('click', this.handleLeftClick);
    document.addEventListener('contextmenu', this.handleContextMenu);
  }

  componentWillUnmount(): void {
    window.clearInterval(this.intervalId);

    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleLeftClick);
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
