import React from 'react';
import './App.scss';
import { Clock } from './Clock/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.handleDocumentContextMenu);
    document.addEventListener('click', this.addClock);

    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.handleDocumentContextMenu);
    document.removeEventListener('click', this.addClock);
    window.clearInterval(this.timerId);
  }

  addClock = () => {
    this.setState({ hasClock: true });
  };

  handleDocumentContextMenu = (event: MouseEvent) => {
    event.preventDefault();

    this.setState({ hasClock: false });
  };

  render(): React.ReactNode {
    const { hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>
        {hasClock && (
          <Clock name={this.state.clockName} />)}
      </div>
    );
  }
}
