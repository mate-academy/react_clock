/* eslint-disable react/state-in-constructor */
import React from 'react';
import { Clock } from './Clock';
import './App.scss';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type AppState = {
  hasClock: boolean;
  clockName: string;
};

export class App extends React.Component<{}, AppState> {
  clockNameIntervalId?: number;

  constructor(props: {}) {
    super(props);
    this.state = {
      hasClock: true,
      clockName: 'Clock-0',
    };
  }

  componentDidMount() {
    // Show on left click
    document.addEventListener('click', this.showClock);

    // Hide on right click
    document.addEventListener('contextmenu', this.hideClock);

    // Update clockName every 3300ms
    this.clockNameIntervalId = window.setInterval(() => {
      const newName = getRandomName();

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      this.setState(_prevState => ({ clockName: newName }));
    }, 3300);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.showClock);
    document.removeEventListener('contextmenu', this.hideClock);
    if (this.clockNameIntervalId) {
      clearInterval(this.clockNameIntervalId);
    }
  }

  showClock = () => {
    this.setState({ hasClock: true });
  };

  hideClock = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
