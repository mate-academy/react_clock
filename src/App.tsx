import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

type Timer = {
  hasClock: boolean;
  clockName: string;
};

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.PureComponent {
  state: Timer = {
    hasClock: true,
    clockName: `Clock-0`,
  };

  interval: number | null = null;

  clockNameInterval = () => {
    this.setState({ clockName: getRandomName() });
  };

  handleAddClock = () => {
    this.setState({ hasClock: true });
  };

  handleDeleteClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  componentDidMount(): void {
    this.interval = window.setInterval(this.clockNameInterval, 3300);
    document.addEventListener('contextmenu', this.handleDeleteClock);
    document.addEventListener('click', this.handleAddClock);
  }

  componentWillUnmount(): void {
    if (this.interval !== null) {
      window.clearInterval(this.interval);
    }

    document.removeEventListener('contextmenu', this.handleDeleteClock);
    document.removeEventListener('click', this.handleAddClock);
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock ? <Clock name={this.state.clockName} /> : null}
      </div>
    );
  }
}
