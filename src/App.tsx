import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

type State = {
  hasClock: boolean;
  clockName: string,
};

export class App extends React.Component {
  today = new Date();

  state: State = {
    hasClock: true,
    clockName: 'Clock-0',
  };

  timerId = 0;

  componentDidMount(): void {
    document.addEventListener('click', this.showClock);
    document.addEventListener('contextmenu', this.hideClock);

    this.timerId = window.setInterval(() => {
      this.setState(prev => ({
        ...prev,
        clockName: getRandomName(),
      }));
    }, 3300);
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.showClock);
    document.removeEventListener('contextmenu', this.hideClock);

    window.clearInterval(this.timerId);
  }

  showClock = (event: MouseEvent) => {
    event.preventDefault();

    this.setState(prev => ({
      ...prev,
      hasClock: true,
    }));
  };

  hideClock = (event: MouseEvent) => {
    event.preventDefault();

    this.setState(prev => ({
      ...prev,
      hasClock: false,
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && (
          <Clock clockName={this.state.clockName} />
        )}
      </div>
    );
  }
}
