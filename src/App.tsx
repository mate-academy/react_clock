/* eslint-disable no-console */
import React from 'react';
import './App.scss';
import { Clock } from './components/Clock/Clock';

interface State {
  clockName: string;
  hasClock: boolean;
}

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component<{}, State> {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  timerId = 0;

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({
        clockName: getRandomName(),
      });
    }, 3300);

    document.addEventListener('contextmenu', (event) => this.hideClock(event));

    document.addEventListener('click', () => this.showClock());
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerId);

    document
      .removeEventListener('contextmenu', (event) => this.hideClock(event));

    document.removeEventListener('click', () => this.showClock());
  }

  showClock() {
    this.setState({
      hasClock: true,
    });
  }

  hideClock(event: MouseEvent) {
    event.preventDefault();

    this.setState({
      hasClock: false,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>
        {this.state.hasClock && <Clock clockName={this.state.clockName} />}
      </div>
    );
  }
}
