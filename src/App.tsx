import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  state = {
    today: new Date(),
    hasClock: true,
    clockName: 'Clock-0',
  };

  clockId = window.setInterval(() => {
    this.setState({ today: new Date() });
  }, 1000);

  // This code starts a timer
  timerId = window.setInterval(() => {
    this.setState({ clockName: getRandomName() });
  }, 3300);

  clockStart = () => {
    this.setState({ today: new Date() });

    this.clockId = window.setInterval(() => {
      this.setState({ today: new Date() });
    }, 1000);

    this.setState({ hasClock: true });
  };

  clockStop = (event: MouseEvent) => {
    event.preventDefault();

    // this code stops the timer
    window.clearInterval(this.clockId);

    this.setState({ hasClock: false });
  };

  render() {
    document.addEventListener('click', this.clockStart);
    document.addEventListener('contextmenu', this.clockStop);

    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && (
          <Clock
            clockName={this.state.clockName}
            today={this.state.today.toUTCString().slice(-12, -4)}
          />
        )}
      </div>
    );
  }
}
