import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ clockName: getRandomName() });
    }, 3300);

    document.addEventListener('contextmenu', this.handleClockDissappear);
    document.addEventListener('click', this.handleClockAppear);
  }

  handleClockDissappear = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
    document.removeEventListener('contextmenu', this.handleClockDissappear);
    document.addEventListener('click', this.handleClockAppear);
  };

  handleClockAppear = () => {
    this.setState({ hasClock: true });
    document.removeEventListener('click', this.handleClockAppear);
    document.addEventListener('contextmenu', this.handleClockDissappear);
  };

  render() {
    const { clockName, hasClock } = this.state;

    return (
      <div className="App">
        <h1>React clock</h1>

        {hasClock && (
          <Clock
            clockName={clockName}
          />
        )}
      </div>
    );
  }
}
