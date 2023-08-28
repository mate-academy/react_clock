/* eslint-disable no-console */
import React from 'react';
import './App.scss';
import { Clock } from './components/clock/clock';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

export class App extends React.Component {
  state = {
    clockName: 'Clock-0',
    hasClock: true,
    timerId: 0,
  };

  componentDidMount(): void {
    const timerId = window.setInterval(() => {
      const name = getRandomName();

      if (this.state.hasClock) {
        console.debug(`Renamed from ${this.state.clockName} to ${name}`);
      }

      this.setState({ clockName: name });
    }, 3300);

    this.setState({ timerId });
    document.addEventListener('contextmenu', this.handleContextMenu);

    document.addEventListener('click', this.handleMouseClick);
  }

  componentWillUnmount() {
    window.clearInterval(this.state.timerId);
    document.removeEventListener('contextmenu', this.handleContextMenu);
    document.removeEventListener('click', this.handleMouseClick);
  }

  handleMouseClick = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: true });
  };

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React clock</h1>

        {this.state.hasClock && (
          <Clock
            clockName={this.state.clockName}
            hasClock={this.state.hasClock}
          />
        )}
      </div>
    );
  }
}
