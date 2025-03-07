import React from 'react';
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

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  clockId = 0;

  handleClockId = () => {
    this.setState({ clockName: getRandomName() });
  };

  setHasClockFalse = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  setHasClockTrue = (event: MouseEvent) => {
    event.preventDefault();
    this.setState(() => ({
      hasClock: true,
    }));
  };

  componentDidMount(): void {
    document.addEventListener('contextmenu', this.setHasClockFalse);
    document.addEventListener('click', this.setHasClockTrue);

    this.clockId = window.setInterval(this.handleClockId, 3300);
  }

  componentWillUnmount(): void {
    document.removeEventListener('contextmenu', this.setHasClockFalse);
    document.removeEventListener('click', this.setHasClockTrue);

    window.clearInterval(this.clockId);
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
