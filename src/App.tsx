import React from 'react';
import './App.scss';
import { Clock } from './Clock';

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

  componentDidMount():void {
    window.addEventListener('click', this.showClockHandler.bind(this));
    window.addEventListener('contextmenu', this.hideClockHandler.bind(this));

    this.timerId = window.setInterval(() => {
      this.setState((prev) => ({
        ...prev,
        clockName: getRandomName(),
      }));
    }, 3300);
  }

  componentWillUnmount():void {
    window.removeEventListener('click', this.showClockHandler.bind(this));
    window.removeEventListener('contextmenu', this.hideClockHandler.bind(this));

    window.clearInterval(this.timerId);
  }

  showClockHandler(e: MouseEvent) {
    e.preventDefault();

    this.setState((prev) => ({
      ...prev,
      hasClock: true,
    }));
  }

  hideClockHandler(e: MouseEvent) {
    e.preventDefault();

    this.setState((prev) => ({
      ...prev,
      hasClock: false,
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && (
          <Clock clock={this.state.clockName} />
        )}
      </div>
    );
  }
}
